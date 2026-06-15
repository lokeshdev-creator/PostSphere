import React from "react";

const CreatePost=()=>{
    return (
        <div className="card p-4 border-0 text-white mx-auto" style={{maxwidth: "500px", background: "#111827"}}>
  <h5 className="fw-bold mb-3">Create Post</h5>
  <form>
    <div className="mb-3">
        <label className="form-label  small text-uppercase tracking-wider">Title</label>
        <input type="text" className="form-control bg-dark border-secondary text-white mb-2" style={{maxwidth: "500px", color: "#f4f7ff"}} placeholder="Title" required />
    </div>
    

    <div className="mb-3">
        <label className="form-label  small text-uppercase tracking-wider">Content</label>
    <textarea className="form-control bg-dark border-secondary text-white mb-3" rows="4" placeholder="What's on your mind?" required></textarea>
    </div>
    
    <div className="input-group mb-3">
  <input type="file" className="form-control" id="inputGroupFile02"/>
  <label className="input-group-text" for="inputGroupFile02">Upload</label>
</div>


    <div className="d-flex justify-content-end gap-2">
      <button type="button" classNmae="btn btn-sm btn-outline-light">Cancel</button>
      <button type="submit" className="btn btn-sm btn-primary px-3 fw-semibold" style={{background: "#2563eb", border: "0"}}>Publish</button>
    </div>
  </form>
</div>

    );
}

export default CreatePost;