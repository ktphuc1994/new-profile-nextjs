import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import ProjectListComponent from './ProjectList';
import projectList from './data.json';
import projectList2 from './data2.json';

const AllProject = () => {
  return (
    <>
      <ProjectCarousel projectList={projectList2} />
      <ProjectListComponent projectList={projectList2} />
    </>
  );
};

export default AllProject;
