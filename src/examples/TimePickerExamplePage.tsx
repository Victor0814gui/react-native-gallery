'use strict';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';

export const TimePickerExamplePage: React.FunctionComponent<{}> = () => {
  const [time, _setTime] = useState(new Date(0));
  const example1jsx = `import DateTimePicker from '@react-native-community/datetimepicker';

<DateTimePicker
  mode="time"
  value={time}
  style={{width: 300, opacity: 1, height: 30}}
/>`;
  const example2jsx = `import DateTimePicker from '@react-native-community/datetimepicker';

<DateTimePicker
  mode="time"
  value={time}
  style={{width: 300, opacity: 1, height: 30}}
  is24Hour={true}
  minuteInterval={5}
/>`;

  return (
    <Page
      title="TimePicker"
      description={
        'Use a TimePicker to let users set a time in your app, for example to set a reminder. The TimePicker displays three controls month, day, and AM/PM. These controls are easy to use with touch or mouse, and they can be styled and configured in several different ways.'
      }>
      <Example title="A simple TimePicker." code={example1jsx}>
        <DateTimePicker
          mode="time"
          value={time}
          style={{width: 300, opacity: 1, height: 30}}
        />
      </Example>
      <Example
        title="A 24 hour clock TimePicker with 5 minute intervals."
        code={example2jsx}>
        <DateTimePicker
          mode="time"
          value={time}
          style={{width: 300, opacity: 1, height: 30}}
          is24Hour={true}
          minuteInterval={5}
        />
      </Example>
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TemplateExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'DateTimePicker',
            url:
              'https://github.com/react-native-datetimepicker/datetimepicker',
          },
        ]}
      />
    </Page>
  );
};