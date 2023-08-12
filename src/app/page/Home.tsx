import './index.scss'
import AboutImg from "../../asset/img/phau_thuat-18_06_58_183.jpg"
import { FaAmbulance, FaMicroscope, FaPills, FaProcedures, FaStethoscope, FaUserMd } from "react-icons/fa";

function Home() {

  return (
    <>
      {/* <!-- Hero Start --> */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                Chào mừng đến với StarLight
              </h5>
              <h1 className="display-1 text-white mb-md-4">Dịch vụ y tế tốt nhất dành cho bạn</h1>s
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid py-5 about-content">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded" src={AboutImg} style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mb-4">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Về chúng tôi</h5>
                <h1 className="display-4">Dịch vụ y tế tốt nhất cho bạn và gia đình</h1>
              </div>
              <p>Bệnh viện Starlight là một trong 7 bệnh viện thuộc phân nhóm Bệnh viên Hạng I trên địa bàn Hà Nội. Đơn vị cung cấp dịch vụ thăm khám, điều trị nội ngoại trú cho tất các các chuyên khoa. Trong những năm gần đây, cơ sở chú trọng cải tạo và đưa vào sử dụng các tòa nhà khang trang, được trang bị cơ sở vật chất hiện đại, đáp ứng nhu cầu chăm sóc sức khỏe của bệnh nhân nội, ngoại thành và trên cả nước.</p>
              <div className="row g-3 pt-3">
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                    <h6 className="mb-0">Bác sĩ<small className="d-block text-primary">Chất lượng</small></h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                    <h6 className="mb-0">Dịch vụ<small className="d-block text-primary">Khẩn cấp</small></h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                    <h6 className="mb-0">Xét nghiệm<small className="d-block text-primary">Chính xác</small></h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                    <h6 className="mb-0">Miễn phí<small className="d-block text-primary">Xe cứu thương</small></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

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

    </>
  );
}

export default Home;