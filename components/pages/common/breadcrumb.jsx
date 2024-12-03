import Link from "next/link";

const BreadCrumb = ({ title, innerTitle }) => {
  return (
    <div className="breadcrumb__areas">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h6>{title}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
