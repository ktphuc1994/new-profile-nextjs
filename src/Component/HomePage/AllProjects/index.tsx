import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import ProjectListComponent from './ProjectList';
import projectList from './data.json';

const AllProject = () => {
  return (
    <>
      <ProjectCarousel projectList={projectList} />
      <ProjectListComponent projectList={projectList} />
    </>
  );
};

export default AllProject;
