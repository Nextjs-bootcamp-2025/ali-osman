const CourseContent = ({ courseTitle, courseText, button }) => {
  return (
    <div className="text-center p-4 shadow-lg max-w-[600px]">
      <h1>{courseTitle}</h1>
      <p>{courseText}</p>
      {button}
    </div>
  );
};

export default CourseContent;
