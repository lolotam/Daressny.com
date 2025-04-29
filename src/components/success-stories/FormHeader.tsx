
interface FormHeaderProps {
  title: string;
  description: string;
}

export const FormHeader = ({ title, description }: FormHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};
