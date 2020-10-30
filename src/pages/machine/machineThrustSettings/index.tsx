import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { omit } from 'ramda';
import MachineThrustSettingsComponent from './MachineThrustSettings';
import { useApi } from '../../../hooks';
import endpoints from '../../../data/endpoints';

const MachineThrustSettings = () => {
  const getSettings = useApi(endpoints.getSettings);
  const putSettings = useApi(endpoints.putSettings);

  const handleSubmit = (values: any) => {
    putSettings.callApi({
      model: 'machine-thrust',
      id: 1,
      data: omit(['max_steps'], values),
    });
  };

  useEffect(() => {
    getSettings.callApi({ model: 'machine-thrust', id: 1 });
  }, []);

  const props = {};

  return getSettings.data ? (
    <Formik initialValues={getSettings.data} onSubmit={handleSubmit}>
      <MachineThrustSettingsComponent {...props} />
    </Formik>
  ) : (
    <div>loading</div>
  );
};

export default MachineThrustSettings;
