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
    </MainLayout>
  );
};

export default HomePage;
