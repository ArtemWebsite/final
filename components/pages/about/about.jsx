import TeamMain from "../teams/team/team";

const AboutMain = () => {
  return (
    <>
      <div className="section-padding pb-0">
        <section>
          <div className="container">
            <div className="row mb-35">
              <div className="col-xl-12 text-center">
                <h2 className="mb-md-5 text-center mb-5">About us</h2>
                <p>ARTEM is about more than just compliance</p>
              </div>
            </div>
            <div className="row mb-35">
              <div
                className="col-xl-8 mx-auto p-5 border rounded-2"
                style={{ background: "#EAF4F3" }}
              >
                <p>
                  We aim to provide a comprehensive technological solution that
                  combats carbon leakage, enables CBAM compliance and
                  facilitates the transition to net zero manufacturing on a
                  global scale
                </p>
                <p>— Nanxi Ding, CEO</p>
              </div>
            </div>
          </div>
        </section>
        <TeamMain />
      </div>
    </>
  );
};

export default AboutMain;
