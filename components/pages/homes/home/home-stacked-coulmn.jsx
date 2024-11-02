import React from 'react'

const HomeStackedCoulmn = () => {
  return (
    <section className="home-multicoulmn">
  <div className="container pt-100 pb-80">
    <div className="row">
    <h2 className="pb-4 text-center">
    Are you operating in one of the following roles?
                </h2>
        <div className="col-lg-12 col-md-6 border rounded p-4 mb-2">
            <div className='d-flex justify-content-between'>
                <h6>CBAM Declarant</h6>
                <p>What is a CBAM Declarant?</p>
            </div>
        <div className="col-lg-12 col-md-6 bg-theme-green p-4">
        <p><strong>A Declarant is either:</strong></p>
        <ul>
<li>The importer who lodges a customs declaration for release for free circulation of goods in its own name  (e.g. Importing company in the EU).</li>
<li>The authorised customs representative (Art. 162(1)EU Regulation No 952/2013) (e.g. Forwarder who handles customs).</li>
<li>The indirect customs representative when the importer is outside of the EU.</li>
</ul>
        </div>
        </div>

        <div className="col-lg-12 col-md-6 border rounded p-4 mb-2">
            <div className='d-flex justify-content-between'>
                <h6>Operator Outside of EU</h6>
                <p>What is a Operator?</p>
            </div>
        <div className="col-lg-12 col-md-6 bg-theme-green p-4">
        <p>An Operator is any legal person or entity that operates or controls an installation (production) in a country outside of the EU.</p>
        </div>
        </div>

        <div className="col-lg-12 col-md-6 border rounded p-4 mb-2">
            <div className='d-flex justify-content-between'>
                <h6>CBAM Verifier</h6>
                <p>What is a CBAM Verifier</p>
            </div>
        <div className="col-lg-12 col-md-6 bg-theme-green p-4">
        <p>A CBAM Verifier is an institution or legal person who is accredited by the competent National Accreditation Body to verify CBAM Emission Reports.</p>
        </div>
        </div>
    </div>
  </div>
</section>
  )
}

export default HomeStackedCoulmn