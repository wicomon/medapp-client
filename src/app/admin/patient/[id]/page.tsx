import { PatientId } from './PatientId';

const PatientIdPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  return (
    <>
      {id && parseInt(id) > 0 ? (
        <PatientId id={parseInt(id)} />
      ) : (
        <div>Usuario invalido</div>
      )}
    </>
  );
};

export default PatientIdPage;
