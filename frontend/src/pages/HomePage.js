import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import HeaderSections from "../components/sections/HeaderSections";
import ProjectList from "../components/list/ProjectList";
import ProfileSections from "../components/sections/ProfileSections";

import MetaTitle from "../meta/MetaTitle";
import { useDispatch, useSelector } from "react-redux";
import { GetProjects } from "../redux/actions/ProjectActions";
import CustomPagination from "../components/pagination/CustomPagination";

const HomePage = () => {
  const getAllProject = useSelector((state) => state.project.getAllProject);
  const [limit, setLimit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProjects(limit, currentPage));
  }, [dispatch, limit, currentPage]);

  return (
    <MainLayout>
      <MetaTitle title="Anasayfa" name="anasayfa" content="anasayfa" />
      <HeaderSections />

      <ProjectList />
      <CustomPagination
        onChange={(page) => setCurrentPage(page)}
        current={currentPage}
        defaultCurrent={1}
        pageSize={limit}
        total={getAllProject.totalProjects}
      />
      <div className="container mx-auto">
        <hr />
      </div>
     
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
    </div>

    </MainLayout>
  );
};

export default HomePage;
