import './index.scss';

function About() {
  return (  
    <>
      {/* <!-- About Start --> */}
      <div className="container-fluid py-5 about-content">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded" src="https://res.cloudinary.com/dipiauw0v/image/upload/v1691845344/DATN/phau_thuat-18_06_58_183_ibgsoe.jpg" style={{ objectFit: "cover" }} />
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
    </>
  );
}

export default About;