import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Image, Space, Tag } from "antd";
import CommentSections from "../components/sections/CommentSections";
import CommentModal from "../components/modal/CommentModal";
import ProjectGallery from "../components/gallery/ProjectGallery";
import ProjectDescriptionFeature from "../components/sections/Project/ProjectDescriptionFeature";
import ProjectTechnologies from "../components/sections/Project/ProjectTechnologies";
import ProjectAccordions from "../components/sections/Project/ProjectAccordions";
import { useDispatch, useSelector } from "react-redux";
import { GetProjectDetails } from "../redux/actions/ProjectActions";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

const ProjectDetailsPage = () => {
  const [showCommentModal, setShowCommentModal] = useState(false);

  const handleShowCommentModal = () => {
    setShowCommentModal(true);
  };
  const handleCloseCommentModal = () => {
    setShowCommentModal(false);
  };

  const getProjectDetails = useSelector(
    (state) => state.project.getProjectDetails
  );
  const { projectId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProjectDetails(projectId));
  }, [dispatch,projectId]);


  return (
    <MainLayout>
      <div className="container mx-auto">
      
        {getProjectDetails.loading ? (
          <LoadingSpinner />
        ) : (
          <Fragment>
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
              {getProjectDetails.success && (
                <Fragment>
                   <div className="col-md-7">
                <ProjectGallery />
              </div>
              <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <ProjectDescriptionFeature  />

                <ProjectTechnologies />
                <ProjectAccordions />
              </div>
                </Fragment>
              )}
            </div>
            <div class="inline-flex items-center justify-center w-full">
              <hr class="w-100 h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
              <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                Yorumlar
              </span>
            </div>
            <div className="d-flex flex-row justify-end my-3">
              <button
                className="btn btn-dark rounded-pill"
                onClick={handleShowCommentModal}
              >
                Yorum Yap
              </button>
              <CommentModal
                showCommentModal={showCommentModal}
                handleCloseCommentModal={handleCloseCommentModal}
              />
            </div>
            <CommentSections />
          </Fragment>
        )}
      </div>
    </MainLayout>
  );
};

export default ProjectDetailsPage;
