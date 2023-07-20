import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  team_lead_id?: string;
  member_id?: string;
  created_at?: any;
  updated_at?: any;

  user_team_team_lead_idTouser?: UserInterface;
  user_team_member_idTouser?: UserInterface;
  _count?: {};
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  team_lead_id?: string;
  member_id?: string;
}
