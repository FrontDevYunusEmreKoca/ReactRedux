import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const BlogDetailsPage = ({ blog }) => {
  const { id } = useParams(); // URL parametresini alıyoruz

  return (
    <div>
      Blog Detayları: {blog ? blog.title : "Bulunamadı"}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps; // props içinden id'yi alıyoruz
  return {
    blog: state.blogs.find((blog) => blog.id === id)
  };
};

export default connect((state) => {
  const { id } = useParams(); // URL parametresini bileşenin dışına aldık
  return mapStateToProps(state, { id });
})(BlogDetailsPage);
