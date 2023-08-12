import './index.scss';
import "../../css/bootstrap.min.css"
import { FaLocationArrow, FaPhone, FaEnvelopeOpen } from "react-icons/fa";

function Contact() {
    return (
        <>
            {/* <!-- Contact Start --> */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Bạn có câu hỏi cần giải đáp?</h5>
                        <h1 className="display-4">Hãy liên hệ với chúng tôi</h1>
                    </div>
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ height: 200 }}>
                                <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: 100, height: 70, transform: "rotate(-15deg)" }}>
                                    <div className='text-white' style={{ fontSize: "2em", transform: "rotate(15deg)" }}>
                                        <FaLocationArrow />
                                    </div>
                                </div>
                                <h6 className="mb-0">1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ height: 200 }}>
                                <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: 100, height: 70, transform: "rotate(-15deg)" }}>
                                    <div className='text-white' style={{ fontSize: "2em", transform: "rotate(15deg)" }}>
                                        <FaPhone />
                                    </div>
                                </div>
                                <h6 className="mb-0">+84 912 345 678</h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ height: 200 }}>
                                <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: 100, height: 70, transform: "rotate(-15deg)" }}>
                                    <div className='text-white' style={{ fontSize: "2em", transform: "rotate(15deg)" }}>
                                        <FaEnvelopeOpen />
                                    </div>
                                </div>
                                <h6 className="mb-0">starlight@hospital.com</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{ height: 500 }}>
                            <div className="position-relative h-100">
                                <iframe className="position-relative w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6914147911302!2d105.84129487499989!3d21.005003388594627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135add3c46cb161%3A0x463734da30e16629!2zxJDhuqFpIGjhu41jIELDoWNoIGtob2EgSMOgIE7hu5lpIC0gSGFub2kgVW5pdmVyc2l0eSBvZiBTY2llbmNlIGFuZCBUZWNobm9sb2d5!5e0!3m2!1svi!2s!4v1691822331991!5m2!1svi!2s"
                                    // width="600" height="450" 
                                    style={{ border: 0 }}
                                    // allowfullscreen="" 
                                    loading="lazy"
                                    aria-hidden="false"
                                    tabIndex={0}></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center position-relative" style={{ marginTop: "-200px", zIndex: 1 }}>
                        <div className="col-lg-8">
                            <div className="bg-white rounded p-5 m-5 mb-0">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control bg-light border-0" placeholder="Họ và tên" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control bg-light border-0" placeholder="Email" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control bg-light border-0" placeholder="Tiêu đề" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control bg-light border-0" rows={5} placeholder="Nội dung"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Gửi tin nhắn</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </>
    );
};

export default Contact;