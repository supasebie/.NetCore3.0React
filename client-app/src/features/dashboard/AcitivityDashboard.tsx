import React from "react";
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../app/models/activity";
import ActivityList from "./ActivityList";

interface IProps {
    activities: IActivity[] 
}

export const AcitivityDashboard: React.FC<IProps> = ({activities}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
          <ActivityList activities = {activities}/>
      </Grid.Column>
    </Grid>
  );
};

export default AcitivityDashboard