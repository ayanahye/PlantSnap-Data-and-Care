import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Dropdown from '../dropdown';
import PlantIcons from '../plantIcons';
import PlantDetails from '../plantDescandDets';
import ListResult from '../listResult';
import UploadPlants from '../uploadPlants';
import { mock } from 'node:test';
import UploadInput from '../uploadPlants';

describe('Dropdown Component', () => {
    it('The isChecked property should be updated when the checkbox is clicked', () => {
        const mockHandleCheckboxChange = jest.fn();

        const { getByLabelText } = render (
            <Dropdown 
                data={['origin', 'type', 'dimension']}
                name="Names"
                onOptionChange={mockHandleCheckboxChange}
                id="option1"
            />
        );

        const checkbox = screen.getByLabelText('origin');

        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();

        expect(mockHandleCheckboxChange).toHaveBeenCalledWith('checkbox-option1-origin', "origin", true);
    });
});

describe('Planticons display', () => {
    it("should display the correct icons", () => {
        const plantDetail = {
            drought_tolerant: true,
            indoor: false,
            flowers: true,
            leaf: false,
            edible_fruit: true,
            edible_leaf: false,
            medicinal: true,
        };

        render(<PlantIcons plantDetail={plantDetail} />);

        expect(screen.getByAltText('drought_tolerant')).toBeInTheDocument();
        expect(screen.getByAltText('flowers')).toBeInTheDocument();
        expect(screen.getByAltText('edible')).toBeInTheDocument();
        expect(screen.getByAltText('medicinal')).toBeInTheDocument();
    })
});

describe("Plant details and description display", () => {
    it("should render the description correctly, and show the correct details", () => {
        const plantDesc = {
            common_name: "rose",
            scientific_name: ["rosa"],
            description: "This is a desc for rose flower",
            family: "rose family",
            type: "flower type",
            dimension: "20",
            cycle: "perenual",
            watering: "frequent",
            sunlight: ["full sun"],
            id: '100'
        };

        render(<PlantDetails plantDetail={plantDesc} />);

        expect(screen.getByText('rose')).toBeInTheDocument();
        expect(screen.getByText('rosa')).toBeInTheDocument();
        expect(screen.getByText('This is a desc for rose flower')).toBeInTheDocument();
        expect(screen.getByText(/rose family/i)).toBeInTheDocument();
        expect(screen.getByText(/flower type/i)).toBeInTheDocument();
        expect(screen.getByText(/20/i)).toBeInTheDocument();
        expect(screen.getByText(/perenual/i)).toBeInTheDocument();
        expect(screen.getByText(/frequent/i)).toBeInTheDocument();
        expect(screen.getByText(/full sun/i)).toBeInTheDocument();
    })
});

describe("list results display", () => {
    it("should render the confidence score and name correctly", () => {
        const plantData = [
            {
                image: {url: '', alt: 'somefake-url'},
                name: 'rose',
                score: 0.9,
                sciName: 'rosa',
            },
        ];

        render(<ListResult data={plantData} />);

        expect(screen.getByText('rose')).toBeInTheDocument();
        expect(screen.getByAltText('somefake-url')).toBeInTheDocument();
        expect(screen.getByText('Confidence: 0.9')).toBeInTheDocument();
    })
});


// note: im not sure if this is the correct way to test that the file change is called the expected number of times.
describe("upload plant images", () => {
    it("should render 5 file input elements and handle the file upload correctly.", () => {
        const mockFileChange = jest.fn();
        render(<UploadInput onFileChange={mockFileChange} />);

        for (let index = 1; index <= 5; index++) {
            const inputbox = screen.getByTestId(`img${index}`);
            expect(inputbox).toBeInTheDocument();
            expect(inputbox).toHaveAttribute('type', 'file');
            expect(inputbox).toHaveClass('upImg');
            expect(inputbox).toHaveAttribute('accept', 'image/jpeg,image/png');

            fireEvent.change(inputbox, {target: {files: [{type: 'image/jpeg'}]}});
            expect(mockFileChange).toHaveBeenCalledTimes(index);


        };

        const additionalInput = screen.queryByTestId('img6');
        expect(additionalInput).not.toBeInTheDocument();
    });
})

// run test using npm test -- --testPathPattern="components/__tests__" 