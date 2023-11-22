import Link from 'next/link'
import Image from 'next/image';
import defImg from './not-found-pic.jpg';
import "./notfound.css";

export default function NotFound() {
    return (

        <main className="testing">
                <div className='notfoundphoto'>
                <Image src={defImg} width={400} height={400} style={{ border: '5px solid #000' , borderRadius: '15px' }} alt="flower" />
                </div>
                <div className="text">
                    <h1 className="error">404 - Plant Not Found</h1>
                    <p>This is most likely due to our API not returning any reults. This flower does not exist in our APIs database. Please try another search or another image. We apologize for the inconvenience this may have caused.</p>
                    <button type="button" className="btn btn-success"><Link className="link" href="/">Return Home</Link></button>
                </div>
        </main>
    )
}




