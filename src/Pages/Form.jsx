import React, { useEffect, useState } from 'react'
import '../Css/form.css'

const Form = () => {
    const [formone, setFormone] = useState(1);
    const [mobile, setMobile] = useState('');
    const [mobileformcss, setMobileformcss] = useState('register');
    const [mobileform, setMobileform] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpformcss, setOtpformcss] = useState('otp');
    const [otpform, setOtpform] = useState(false);
    const [details, setDetails] = useState({ fullname: '', lastname: '', phone: '', email: '', password: '', confirmpassword: '' });
    const [detailsformcss, setDetailsformcss] = useState('details');
    const [detailsform, setDetailsform] = useState(false);
    const [filesform, setFilesform] = useState(false);
    const [filesformcss, setFilesformcss] = useState('files');
    const [files, setFiles] = useState({ aadharcard: '', pancard: '', pincode: '', address: '' })
    const [aadharimage, setAadharcardimage] = useState()
    const [pancardimage, setPancardimage] = useState()
    const [formdata, setFormdata] = useState({ mobile: '', fullname: '', lastname: '', phone: '', email: '', password: '', confirmpassword: '', aadharcard: '', pancard: '' });

    useEffect(() => {
        formuse();
    }, [formone, formdata])
    const formuse = () => {
        if (formone === 1) {
            setMobileform(true)
        }
        else if (formone === 2) {
            setOtpform(true)
        }
        else if (formone === 3) {
            setDetailsform(true)
        }
        else if (formone === 4) {
            setFilesform(true)
        }
    }
    const mobilevalue = (e) => {
        e.preventDefault();
        setFormdata({ mobile });
        console.log(formdata)
        setMobileformcss('registerone')
        setOtpformcss('otp')
        setFormone(2)
    }
    const otpvalue = (e) => {
        e.preventDefault();
        setFormdata({ mobile });
        console.log(formdata)
        setOtpformcss('otpone');
        setDetailsformcss('details')
        setFormone(3)
    }

    const detailsdata = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
        setFormdata({ details })
    }

    const detailsvalue = (e) => {
        e.preventDefault()
        setDetailsformcss('detailsone');
        setFilesformcss('files')
        setFormdata({ mobile, details });
        setFormone(4)
        console.log(formdata);
        // console.log(details)
    }

    const filesdata = (e) => {
        setFiles({ ...files, [e.target.name]: e.target.value });
        setFormdata({ mobile, details, files })
    }

    const filesvalue = (e) => {
        e.preventDefault();
        setFilesformcss('filesone')
        // console.log(aadharcard, pancard, aadharimage, pancardimage)
        localStorage.getItem("form_data", JSON.stringify(formdata));
        console.log(JSON.stringify(formdata))


    }


    return (
        <>
            {mobileform &&
                <div className={mobileformcss}>
                    <form onSubmit={mobilevalue}>
                        <div className="row">
                            <div className="col-md-3 register-left">
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                                <h3>Welcome</h3>
                                <p>You are 30 seconds away from earning your own money!</p>
                            </div>
                            <div className="col-md-9 register-right">

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <h3 className="register-heading">Enter Mobile Number</h3>
                                        <div className="row register-form">
                                            <div className="col-md-12 ">
                                                {/* <div className="form-group"> */}

                                                    {/* <input type="number" className="inputone" minLength={10} maxLength={10} placeholder="Enter valid number" value={mobile} onChange={(e) => setMobile(e.target.value)} required /> */}
                                                    {/* <input type="submit" className="btnRegister" value="Get OTP" /> */}
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" minLength={10} maxLength={10} placeholder="Enter valid number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                                                    {/* </div><br /> */}
                                                    <button className="btnRegister" type='submit'>Get OTP</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            }
            {otpform &&
                <div className={otpformcss}>
                    <form onSubmit={otpvalue}>
                        <div className="row">
                            <div className="col-md-3 otp-left">
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                                <h3>Welcome</h3>
                                <p>You are 30 seconds away from earning your own money!</p>
                                {/* <input type="submit" name="" value="Back" /><br /> */}

                            </div>
                            <div className="col-md-9 otp-right">

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <h3 className="otp-heading">Enter OTP</h3>
                                        <div className="row otp-form">
                                            <div className="col-md-12 p-5">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                                                    {/* <input type="submit" className="btnRegister" value="Get OTP" /> */}
                                                    <button className="btnRegister" type='submit'>Verify OTP</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            }
            {detailsform &&
                <div className={detailsformcss}>
                    <form onSubmit={detailsvalue}>
                        <div className="row">
                            <div className="col-md-3 details-left">
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                                <h3>Welcome</h3>
                                <p>You are 30 seconds away from earning your own money!</p>
                                {/* <input type="submit" className="btnRegister" value="Back" /> */}
                                {/* <input type="submit" name="" value="Back" /><br /> */}

                            </div>
                            <div className="col-md-9 details-right">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <h3 className="details-heading">Add Profile</h3>
                                        <div className="row details-form">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='fullname' placeholder="First Name *" value={details.fullname} onChange={detailsdata} required />
                                                </div><br />
                                                <div className="form-group">
                                                    <input type="text" minLength="10" maxLength="10" name="phone" className="form-control" placeholder="Your Phone *" value={details.phone} onChange={detailsdata} required />
                                                </div><br />
                                                <div className="form-group">
                                                    <input type="password" className="form-control" name='password' placeholder="Password *" value={details.password} onChange={detailsdata} required />
                                                </div><br />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='lastname' placeholder="Last Name *" value={details.lastname} onChange={detailsdata} required />
                                                </div><br />
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name='email' placeholder="Your Email *" value={details.email} onChange={detailsdata} required />
                                                </div><br />
                                                <div className="form-group">
                                                    <input type="password" className="form-control" name='confirmpassword' placeholder="Confirm Password *" value={details.confirmpassword} onChange={detailsdata} required />
                                                </div><br />
                                                <input type="submit" className="btnRegister" value="Register" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            }
            {filesform &&
                <div className={filesformcss}>
                    <form onSubmit={filesvalue}>
                        <div className="row">
                            <div className="col-md-3 files-left">
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                                <h3>Welcome</h3>
                                <p>You are 30 seconds away from earning your own money!</p>
                                {/* <input type="submit" className="btnRegister" value="Back" /> */}
                                {/* <input type="submit" name="" value="Back" /><br /> */}

                            </div>
                            <div className="col-md-9 files-right">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <h3 className="files-heading">Add Profile</h3>
                                        <div className="row files-form">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" name='aadharcard' placeholder="Aadhar card number *" value={files.aadharcard} onChange={filesdata} required />
                                                </div><br />
                                                <div className="form-group">
                                                    <input type="number" minLength="10" maxLength="10" name="pancard" className="form-control" placeholder="Pan card number *" value={files.pancard} onChange={filesdata} required />
                                                </div><br />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" name='pincode' placeholder="Enter pin-code *" value={files.pincode} onChange={filesdata} required />
                                                </div><br />
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='address' placeholder="Enter address *" value={files.address} onChange={filesdata} required />
                                                </div><br />
                                                <input type="submit" className="btnRegister" value="Register" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            }

        </>
    )
}

export default Form
