import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
          Experienced Application Developer with a demonstrated history of working in the information technology and services industry. 
          Experienced with all stages of the development cycle for dynamic web projects. 
          Well-versed in numerous programming languages including React.js, JavaScript, CSS, CodeIgniter, Ionic Framework, Vue Js.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl12 l12 m12 s12">
              <p>
                <strong>Email:</strong> arywindu@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +62 818 0634 1365
              </p>
              <p>
                <strong>Address:</strong> Taman Karang Bahagia Blok C1 NO 27, Kab. Bekasi
              </p>
            </div>
            {/* <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Second Language</strong> - Spanish
              </p>
              <p>
                <strong>Third Language</strong> - Chinese
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
