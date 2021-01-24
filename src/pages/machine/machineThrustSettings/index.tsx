import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as R from 'ramda';
import MachineThrustSettingsComponent from './MachineThrustSettings';
import { useApi } from '../../../hooks';
import endpoints from '../../../data/endpoints';

const MachineThrustSettings = () => {
  const getSettings = useApi(endpoints.getSettings);
  const putSettings = useApi(endpoints.putSettings);

  const handleSubmit = (values: any) => {
    putSettings.callApi({
      model: 'machine-thrust',
      // eslint-disable-next-line no-underscore-dangle
      id: getSettings.data.id,
      data: R.omit(['max_steps', 'steps_per_mm', 'id'], values),
    });
  };

  useEffect(() => {
    getSettings.callApi({ model: 'machine-thrust', id: 'default' });
  }, []);

  const props = {};
  return getSettings.data ? (
    <Formik
      initialValues={R.reject(R.equals(null))(R.omit(['id'], getSettings.data))}
      onSubmit={handleSubmit}
      validate={() => ({})}
    >
      <MachineThrustSettingsComponent {...props} />
    </Formik>
  ) : (
    <div>loading</div>
  );
};

export default MachineThrustSettings;
