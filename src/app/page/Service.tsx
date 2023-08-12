import { FaUserMd, FaProcedures, FaStethoscope, FaAmbulance, FaPills, FaMicroscope } from 'react-icons/fa';
import './index.scss';

function Services() {
    return (<>
       {/* <!-- Services Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Các dịch vụ</h5>
            <h1 className="display-4">Các dịch vụ y tế tuyệt vời</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4" >
                  <div className='text-white' style={{ fontSize: "3em", transform: "rotate(15deg)" }}>
                    <FaUserMd />
                  </div>
                </div>
                <h4 className="mb-3">Chăm sóc khẩn cấp</h4>
                <p className="m-0">Cung cấp các dịch vụ chăm sóc khẩn cấp cho người bệnh</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <div className='text-white' style={{ fontSize: "3em", transform: "rotate(15deg)" }}>
                    <FaProcedures />
                  </div>
                </div>
                <h4 className="mb-3">Phẫu thuật và tiểu phẫu</h4>
                <p className="m-0">Phẫu thuật không đau đớn, chi phí phải chăng</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <div className='text-white' style={{ fontSize: "3em", transform: "rotate(15deg)" }}>
                    <FaStethoscope />
                  </div>
                </div>
                <h4 className="mb-3">Khám bệnh tại nhà</h4>
                <p className="m-0">Dịch vụ khám bệnh tận nơi</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <div className='text-white' style={{ fontSize: "3em", transform: "rotate(15deg)" }}>
                    <FaAmbulance />
                  </div>
                </div>
                <h4 className="mb-3">Dịch vụ xe cứu thương</h4>
                <p className="m-0">Dịch vụ xe cứu thương đưa đón tận nhà</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <div className='text-white' style={{ fontSize: "3em", transform: "rotate(15deg)" }}>
                    <FaPills />
                  </div>
                </div>
                <h4 className="mb-3">Thuốc và dược phẩm</h4>
                <p className="m-0">Cung cấp các loại thuốc tốt nhất</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <div className='text-white' style={{ fontSize: "3em", transform: "rotate(15deg)" }}>
                    <FaMicroscope />
                  </div>
                </div>
                <h4 className="mb-3">Xét nghiệm</h4>
                <p className="m-0">Dịch vụ xét nghiệm nhanh, chính xác</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}
    </>);
}

export default Services;