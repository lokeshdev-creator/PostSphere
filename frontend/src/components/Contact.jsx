import React from "react";

const Contact=()=>{
    return (
        <div className="container my-5 text-white" style={{maxwidth: "950px", fontfamily: "sans-serif"}}>
  <div className="row g-0 bg-dark rounded-3 overflow-hidden shadow-lg" style={{backgroundcolor:"#111827 !important"}}>
    
    {/*Left Side: Form Area  */}
    <div className="col-md-7 p-4 p-md-5">
      <h2 className="fw-bold mb-2">Get in Touch</h2>
      <p className=" mb-4 small">Have a question or want to collaborate? Drop a message below.</p>
      
      <form style={{color:"whitesmoke"}}>
        <div className="mb-3">
          <label className="form-label  small text-uppercase tracking-wider">Name</label>
          <input type="text" className="form-control bg-secondary bg-opacity-10 border-secondary text-white p-2" style={{Color:"whites"}} placeholder="Your name" required />
        </div>
        
        <div className="mb-3">
          <label className="form-label  small text-uppercase tracking-wider">Email</label>
          <input type="email" className="form-control bg-secondary bg-opacity-10 border-secondary text-white p-2" placeholder="your.email@example.com" required />
        </div>
        
        <div className="mb-4">
          <label className="form-label  small text-uppercase tracking-wider">Message</label>
          <textarea className="form-control bg-secondary bg-opacity-10 border-secondary text-white p-2" rows="4" placeholder="Type your message here..." required></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary px-4 fw-semibold" style={{backgroundcolor:"#6137ae", border: "none"}}>Send Message</button>
      </form>
    </div>

    {/* Right Side: Info Card (Matches your purple/blue sidebar) */}
    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-center p-4 p-md-5" 
         style={{background: "lineargradient(135deg, #2563eb 0%, #a855f7 100%)"}}>
      
      
      <h3 className="h4 fw-bold mb-1">Lokesh Dashore</h3>
      <p className="text-white-50 small mb-3">gamil@com</p>
      
      <hr className="w-25 border-white opacity-50 my-2"/>
      
      <p className="small text-white-50 px-3 my-3" style={{lineheight: "1.6"}}>
        Feel free to reach out for MERN stack projects, open-source collaborations, or web development inquiries.
      </p>
      
      <div className="mt-3 d-flex gap-2">
        <a href="#" className="btn  bg-opacity-20 border-0 text-white rounded-pill px-3" style={{background: "lineargradient(135deg, #2563eb 0%, #a855f7 100%)"}}>GitHub</a>
        <a href="#" className="btn  bg-opacity-20 border-0 text-white rounded-pill px-4">LinkedIn</a>
      </div>
    </div>

  </div>
</div>

    );
}

export default Contact;