import React from 'react';

const ProjectForm = () => {
  return (
    <form className="project-form flex flex-col gap-5">
      <h2 className="text-4xl font-medium text-sky-400 mb-10">
        Add a new project
      </h2>
      <div className="form-control flex flex-col gap-2">
        <label htmlFor="title" className="cursor-pointer hover:text-sky-400 duration-300">Project Title</label>
        <input type="text" placeholder="e.g. e-commerce website" id="title" className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"/>
      </div>
      <div className="form-control flex flex-col gap-2">
        <label htmlFor="tech" className="cursor-pointer hover:text-sky-400 duration-300">Technologies</label>
        <input type="text" placeholder="e.g. React, Redux, NodeJS etc." id="tech" className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"/>
      </div>
      <div className="form-control flex flex-col gap-2">
        <label htmlFor="budget" className="cursor-pointer hover:text-sky-400 duration-300">Budget (in USD)</label>
        <input type="number" placeholder="e.g. 500" id="budget" className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"/>
      </div>
      <div className="form-control flex flex-col gap-2">
        <label htmlFor="duration" className="cursor-pointer hover:text-sky-400 duration-300">Duration (in Week)</label>
        <input type="number" placeholder="e.g. e-commerce website" id="duration" className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"/>
      </div>
      <div className="form-control flex flex-col gap-2">
        <label htmlFor="manager" className="cursor-pointer hover:text-sky-400 duration-300">Manager</label>
        <input type="text" placeholder="e.g. Natasha" id="manager" className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"/>
      </div>
      <div className="form-control flex flex-col gap-2">
        <label htmlFor="dev" className="cursor-pointer hover:text-sky-400 duration-300">Developers</label>
        <input type="number" placeholder="e.g. 5" id="dev" className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"/>
      </div>

      <button type="submit" className="bg-sky-400 text-slate-900 py-3 rounded-lg hover:bg-sky-50 duration-300">Add Project</button>
    </form>
  );
};

export default ProjectForm;