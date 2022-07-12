import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type ClerkUser = {
  __typename?: 'ClerkUser';
  birthday?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  email_addresses?: Maybe<Array<Maybe<EmailAddresses>>>;
  external_accounts?: Maybe<Array<Maybe<Scalars['String']>>>;
  external_id?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  last_name: Scalars['String'];
  object?: Maybe<Scalars['String']>;
  password_enabled?: Maybe<Scalars['Boolean']>;
  phone_numbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  primary_email_address_id: Scalars['String'];
  primary_phone_number_id?: Maybe<Scalars['String']>;
  primary_web3_wallet_id?: Maybe<Scalars['String']>;
  profile_image_url: Scalars['String'];
  public_metadata?: Maybe<PublicMetadata>;
  two_factor_enabled?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  web3_wallets?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateUserInput = {
  email_address: Scalars['String'];
  first_name: Scalars['String'];
  isManager: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
};

export type EmailAddresses = {
  __typename?: 'EmailAddresses';
  email_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  linked_to?: Maybe<Array<Maybe<Scalars['String']>>>;
  object?: Maybe<Scalars['String']>;
  verification?: Maybe<Verification>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type PublicMetadata = {
  __typename?: 'PublicMetadata';
  allowed_roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  default_role?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  first_name: Scalars['String'];
  id: Scalars['String'];
  isManager: Scalars['Boolean'];
  last_name: Scalars['String'];
};

export type Verification = {
  __typename?: 'Verification';
  status?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
};

/** columns and relationships of "bike" */
export type Bike = {
  __typename?: 'bike';
  /** An object relationship */
  color: Color;
  color_id: Scalars['Int'];
  id: Scalars['Int'];
  is_rentable: Scalars['Boolean'];
  /** An object relationship */
  location: Location;
  location_id: Scalars['Int'];
  /** An object relationship */
  model: Model;
  model_id: Scalars['Int'];
  /** An object relationship */
  rating?: Maybe<Bike_Rating>;
  /** An array relationship */
  reservations: Array<Reservation>;
  /** An aggregate relationship */
  reservations_aggregate: Reservation_Aggregate;
  /** An array relationship */
  reservations_restricted: Array<Reservation_Restricted>;
  /** An aggregate relationship */
  reservations_restricted_aggregate: Reservation_Restricted_Aggregate;
};


/** columns and relationships of "bike" */
export type BikeReservationsArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Order_By>>;
  where?: InputMaybe<Reservation_Bool_Exp>;
};


/** columns and relationships of "bike" */
export type BikeReservations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Order_By>>;
  where?: InputMaybe<Reservation_Bool_Exp>;
};


/** columns and relationships of "bike" */
export type BikeReservations_RestrictedArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Restricted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Restricted_Order_By>>;
  where?: InputMaybe<Reservation_Restricted_Bool_Exp>;
};


/** columns and relationships of "bike" */
export type BikeReservations_Restricted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Restricted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Restricted_Order_By>>;
  where?: InputMaybe<Reservation_Restricted_Bool_Exp>;
};

/** aggregated selection of "bike" */
export type Bike_Aggregate = {
  __typename?: 'bike_aggregate';
  aggregate?: Maybe<Bike_Aggregate_Fields>;
  nodes: Array<Bike>;
};

/** aggregate fields of "bike" */
export type Bike_Aggregate_Fields = {
  __typename?: 'bike_aggregate_fields';
  avg?: Maybe<Bike_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bike_Max_Fields>;
  min?: Maybe<Bike_Min_Fields>;
  stddev?: Maybe<Bike_Stddev_Fields>;
  stddev_pop?: Maybe<Bike_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bike_Stddev_Samp_Fields>;
  sum?: Maybe<Bike_Sum_Fields>;
  var_pop?: Maybe<Bike_Var_Pop_Fields>;
  var_samp?: Maybe<Bike_Var_Samp_Fields>;
  variance?: Maybe<Bike_Variance_Fields>;
};


/** aggregate fields of "bike" */
export type Bike_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bike_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bike" */
export type Bike_Aggregate_Order_By = {
  avg?: InputMaybe<Bike_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bike_Max_Order_By>;
  min?: InputMaybe<Bike_Min_Order_By>;
  stddev?: InputMaybe<Bike_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bike_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bike_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bike_Sum_Order_By>;
  var_pop?: InputMaybe<Bike_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bike_Var_Samp_Order_By>;
  variance?: InputMaybe<Bike_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bike" */
export type Bike_Arr_Rel_Insert_Input = {
  data: Array<Bike_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bike_On_Conflict>;
};

/** aggregate avg on columns */
export type Bike_Avg_Fields = {
  __typename?: 'bike_avg_fields';
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bike" */
export type Bike_Avg_Order_By = {
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bike". All fields are combined with a logical 'AND'. */
export type Bike_Bool_Exp = {
  _and?: InputMaybe<Array<Bike_Bool_Exp>>;
  _not?: InputMaybe<Bike_Bool_Exp>;
  _or?: InputMaybe<Array<Bike_Bool_Exp>>;
  color?: InputMaybe<Color_Bool_Exp>;
  color_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_rentable?: InputMaybe<Boolean_Comparison_Exp>;
  location?: InputMaybe<Location_Bool_Exp>;
  location_id?: InputMaybe<Int_Comparison_Exp>;
  model?: InputMaybe<Model_Bool_Exp>;
  model_id?: InputMaybe<Int_Comparison_Exp>;
  rating?: InputMaybe<Bike_Rating_Bool_Exp>;
  reservations?: InputMaybe<Reservation_Bool_Exp>;
  reservations_restricted?: InputMaybe<Reservation_Restricted_Bool_Exp>;
};

/** unique or primary key constraints on table "bike" */
export enum Bike_Constraint {
  /** unique or primary key constraint on columns "id" */
  BikePkey = 'bike_pkey'
}

/** input type for incrementing numeric columns in table "bike" */
export type Bike_Inc_Input = {
  color_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  location_id?: InputMaybe<Scalars['Int']>;
  model_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "bike" */
export type Bike_Insert_Input = {
  color?: InputMaybe<Color_Obj_Rel_Insert_Input>;
  color_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  is_rentable?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Location_Obj_Rel_Insert_Input>;
  location_id?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Model_Obj_Rel_Insert_Input>;
  model_id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Bike_Rating_Obj_Rel_Insert_Input>;
  reservations?: InputMaybe<Reservation_Arr_Rel_Insert_Input>;
  reservations_restricted?: InputMaybe<Reservation_Restricted_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Bike_Max_Fields = {
  __typename?: 'bike_max_fields';
  color_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  model_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "bike" */
export type Bike_Max_Order_By = {
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bike_Min_Fields = {
  __typename?: 'bike_min_fields';
  color_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  model_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "bike" */
export type Bike_Min_Order_By = {
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bike" */
export type Bike_Mutation_Response = {
  __typename?: 'bike_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bike>;
};

/** input type for inserting object relation for remote table "bike" */
export type Bike_Obj_Rel_Insert_Input = {
  data: Bike_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Bike_On_Conflict>;
};

/** on_conflict condition type for table "bike" */
export type Bike_On_Conflict = {
  constraint: Bike_Constraint;
  update_columns?: Array<Bike_Update_Column>;
  where?: InputMaybe<Bike_Bool_Exp>;
};

/** Ordering options when selecting data from "bike". */
export type Bike_Order_By = {
  color?: InputMaybe<Color_Order_By>;
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_rentable?: InputMaybe<Order_By>;
  location?: InputMaybe<Location_Order_By>;
  location_id?: InputMaybe<Order_By>;
  model?: InputMaybe<Model_Order_By>;
  model_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Bike_Rating_Order_By>;
  reservations_aggregate?: InputMaybe<Reservation_Aggregate_Order_By>;
  reservations_restricted_aggregate?: InputMaybe<Reservation_Restricted_Aggregate_Order_By>;
};

/** primary key columns input for table: bike */
export type Bike_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "bike_rating" */
export type Bike_Rating = {
  __typename?: 'bike_rating';
  avg_rating?: Maybe<Scalars['numeric']>;
  bike_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "bike_rating" */
export type Bike_Rating_Aggregate = {
  __typename?: 'bike_rating_aggregate';
  aggregate?: Maybe<Bike_Rating_Aggregate_Fields>;
  nodes: Array<Bike_Rating>;
};

/** aggregate fields of "bike_rating" */
export type Bike_Rating_Aggregate_Fields = {
  __typename?: 'bike_rating_aggregate_fields';
  avg?: Maybe<Bike_Rating_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bike_Rating_Max_Fields>;
  min?: Maybe<Bike_Rating_Min_Fields>;
  stddev?: Maybe<Bike_Rating_Stddev_Fields>;
  stddev_pop?: Maybe<Bike_Rating_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bike_Rating_Stddev_Samp_Fields>;
  sum?: Maybe<Bike_Rating_Sum_Fields>;
  var_pop?: Maybe<Bike_Rating_Var_Pop_Fields>;
  var_samp?: Maybe<Bike_Rating_Var_Samp_Fields>;
  variance?: Maybe<Bike_Rating_Variance_Fields>;
};


/** aggregate fields of "bike_rating" */
export type Bike_Rating_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bike_Rating_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Bike_Rating_Avg_Fields = {
  __typename?: 'bike_rating_avg_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  bike_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "bike_rating". All fields are combined with a logical 'AND'. */
export type Bike_Rating_Bool_Exp = {
  _and?: InputMaybe<Array<Bike_Rating_Bool_Exp>>;
  _not?: InputMaybe<Bike_Rating_Bool_Exp>;
  _or?: InputMaybe<Array<Bike_Rating_Bool_Exp>>;
  avg_rating?: InputMaybe<Numeric_Comparison_Exp>;
  bike_id?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for inserting data into table "bike_rating" */
export type Bike_Rating_Insert_Input = {
  avg_rating?: InputMaybe<Scalars['numeric']>;
  bike_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Bike_Rating_Max_Fields = {
  __typename?: 'bike_rating_max_fields';
  avg_rating?: Maybe<Scalars['numeric']>;
  bike_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Bike_Rating_Min_Fields = {
  __typename?: 'bike_rating_min_fields';
  avg_rating?: Maybe<Scalars['numeric']>;
  bike_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting object relation for remote table "bike_rating" */
export type Bike_Rating_Obj_Rel_Insert_Input = {
  data: Bike_Rating_Insert_Input;
};

/** Ordering options when selecting data from "bike_rating". */
export type Bike_Rating_Order_By = {
  avg_rating?: InputMaybe<Order_By>;
  bike_id?: InputMaybe<Order_By>;
};

/** select columns of table "bike_rating" */
export enum Bike_Rating_Select_Column {
  /** column name */
  AvgRating = 'avg_rating',
  /** column name */
  BikeId = 'bike_id'
}

/** aggregate stddev on columns */
export type Bike_Rating_Stddev_Fields = {
  __typename?: 'bike_rating_stddev_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  bike_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Bike_Rating_Stddev_Pop_Fields = {
  __typename?: 'bike_rating_stddev_pop_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  bike_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Bike_Rating_Stddev_Samp_Fields = {
  __typename?: 'bike_rating_stddev_samp_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  bike_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Bike_Rating_Sum_Fields = {
  __typename?: 'bike_rating_sum_fields';
  avg_rating?: Maybe<Scalars['numeric']>;
  bike_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Bike_Rating_Var_Pop_Fields = {
  __typename?: 'bike_rating_var_pop_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  bike_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Bike_Rating_Var_Samp_Fields = {
  __typename?: 'bike_rating_var_samp_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  bike_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Bike_Rating_Variance_Fields = {
  __typename?: 'bike_rating_variance_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  bike_id?: Maybe<Scalars['Float']>;
};

/** select columns of table "bike" */
export enum Bike_Select_Column {
  /** column name */
  ColorId = 'color_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsRentable = 'is_rentable',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  ModelId = 'model_id'
}

/** input type for updating data in table "bike" */
export type Bike_Set_Input = {
  color_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  is_rentable?: InputMaybe<Scalars['Boolean']>;
  location_id?: InputMaybe<Scalars['Int']>;
  model_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Bike_Stddev_Fields = {
  __typename?: 'bike_stddev_fields';
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bike" */
export type Bike_Stddev_Order_By = {
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bike_Stddev_Pop_Fields = {
  __typename?: 'bike_stddev_pop_fields';
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bike" */
export type Bike_Stddev_Pop_Order_By = {
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bike_Stddev_Samp_Fields = {
  __typename?: 'bike_stddev_samp_fields';
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bike" */
export type Bike_Stddev_Samp_Order_By = {
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Bike_Sum_Fields = {
  __typename?: 'bike_sum_fields';
  color_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  model_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bike" */
export type Bike_Sum_Order_By = {
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
};

/** update columns of table "bike" */
export enum Bike_Update_Column {
  /** column name */
  ColorId = 'color_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsRentable = 'is_rentable',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  ModelId = 'model_id'
}

/** aggregate var_pop on columns */
export type Bike_Var_Pop_Fields = {
  __typename?: 'bike_var_pop_fields';
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bike" */
export type Bike_Var_Pop_Order_By = {
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bike_Var_Samp_Fields = {
  __typename?: 'bike_var_samp_fields';
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bike" */
export type Bike_Var_Samp_Order_By = {
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bike_Variance_Fields = {
  __typename?: 'bike_variance_fields';
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bike" */
export type Bike_Variance_Order_By = {
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "color" */
export type Color = {
  __typename?: 'color';
  /** An array relationship */
  bikes: Array<Bike>;
  /** An aggregate relationship */
  bikes_aggregate: Bike_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "color" */
export type ColorBikesArgs = {
  distinct_on?: InputMaybe<Array<Bike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Order_By>>;
  where?: InputMaybe<Bike_Bool_Exp>;
};


/** columns and relationships of "color" */
export type ColorBikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Order_By>>;
  where?: InputMaybe<Bike_Bool_Exp>;
};

/** aggregated selection of "color" */
export type Color_Aggregate = {
  __typename?: 'color_aggregate';
  aggregate?: Maybe<Color_Aggregate_Fields>;
  nodes: Array<Color>;
};

/** aggregate fields of "color" */
export type Color_Aggregate_Fields = {
  __typename?: 'color_aggregate_fields';
  avg?: Maybe<Color_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Color_Max_Fields>;
  min?: Maybe<Color_Min_Fields>;
  stddev?: Maybe<Color_Stddev_Fields>;
  stddev_pop?: Maybe<Color_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Color_Stddev_Samp_Fields>;
  sum?: Maybe<Color_Sum_Fields>;
  var_pop?: Maybe<Color_Var_Pop_Fields>;
  var_samp?: Maybe<Color_Var_Samp_Fields>;
  variance?: Maybe<Color_Variance_Fields>;
};


/** aggregate fields of "color" */
export type Color_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Color_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Color_Avg_Fields = {
  __typename?: 'color_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "color". All fields are combined with a logical 'AND'. */
export type Color_Bool_Exp = {
  _and?: InputMaybe<Array<Color_Bool_Exp>>;
  _not?: InputMaybe<Color_Bool_Exp>;
  _or?: InputMaybe<Array<Color_Bool_Exp>>;
  bikes?: InputMaybe<Bike_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "color" */
export enum Color_Constraint {
  /** unique or primary key constraint on columns "id" */
  ColorPkey = 'color_pkey'
}

/** input type for incrementing numeric columns in table "color" */
export type Color_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "color" */
export type Color_Insert_Input = {
  bikes?: InputMaybe<Bike_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Color_Max_Fields = {
  __typename?: 'color_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Color_Min_Fields = {
  __typename?: 'color_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "color" */
export type Color_Mutation_Response = {
  __typename?: 'color_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Color>;
};

/** input type for inserting object relation for remote table "color" */
export type Color_Obj_Rel_Insert_Input = {
  data: Color_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Color_On_Conflict>;
};

/** on_conflict condition type for table "color" */
export type Color_On_Conflict = {
  constraint: Color_Constraint;
  update_columns?: Array<Color_Update_Column>;
  where?: InputMaybe<Color_Bool_Exp>;
};

/** Ordering options when selecting data from "color". */
export type Color_Order_By = {
  bikes_aggregate?: InputMaybe<Bike_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: color */
export type Color_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "color" */
export enum Color_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "color" */
export type Color_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Color_Stddev_Fields = {
  __typename?: 'color_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Color_Stddev_Pop_Fields = {
  __typename?: 'color_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Color_Stddev_Samp_Fields = {
  __typename?: 'color_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Color_Sum_Fields = {
  __typename?: 'color_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "color" */
export enum Color_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Color_Var_Pop_Fields = {
  __typename?: 'color_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Color_Var_Samp_Fields = {
  __typename?: 'color_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Color_Variance_Fields = {
  __typename?: 'color_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "location" */
export type Location = {
  __typename?: 'location';
  /** An array relationship */
  bikes: Array<Bike>;
  /** An aggregate relationship */
  bikes_aggregate: Bike_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "location" */
export type LocationBikesArgs = {
  distinct_on?: InputMaybe<Array<Bike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Order_By>>;
  where?: InputMaybe<Bike_Bool_Exp>;
};


/** columns and relationships of "location" */
export type LocationBikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Order_By>>;
  where?: InputMaybe<Bike_Bool_Exp>;
};

/** aggregated selection of "location" */
export type Location_Aggregate = {
  __typename?: 'location_aggregate';
  aggregate?: Maybe<Location_Aggregate_Fields>;
  nodes: Array<Location>;
};

/** aggregate fields of "location" */
export type Location_Aggregate_Fields = {
  __typename?: 'location_aggregate_fields';
  avg?: Maybe<Location_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Location_Max_Fields>;
  min?: Maybe<Location_Min_Fields>;
  stddev?: Maybe<Location_Stddev_Fields>;
  stddev_pop?: Maybe<Location_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Location_Stddev_Samp_Fields>;
  sum?: Maybe<Location_Sum_Fields>;
  var_pop?: Maybe<Location_Var_Pop_Fields>;
  var_samp?: Maybe<Location_Var_Samp_Fields>;
  variance?: Maybe<Location_Variance_Fields>;
};


/** aggregate fields of "location" */
export type Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Location_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Location_Avg_Fields = {
  __typename?: 'location_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
  _and?: InputMaybe<Array<Location_Bool_Exp>>;
  _not?: InputMaybe<Location_Bool_Exp>;
  _or?: InputMaybe<Array<Location_Bool_Exp>>;
  bikes?: InputMaybe<Bike_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "location" */
export enum Location_Constraint {
  /** unique or primary key constraint on columns "id" */
  LocationPkey = 'location_pkey'
}

/** input type for incrementing numeric columns in table "location" */
export type Location_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "location" */
export type Location_Insert_Input = {
  bikes?: InputMaybe<Bike_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Location_Max_Fields = {
  __typename?: 'location_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Location_Min_Fields = {
  __typename?: 'location_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "location" */
export type Location_Mutation_Response = {
  __typename?: 'location_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Location>;
};

/** input type for inserting object relation for remote table "location" */
export type Location_Obj_Rel_Insert_Input = {
  data: Location_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Location_On_Conflict>;
};

/** on_conflict condition type for table "location" */
export type Location_On_Conflict = {
  constraint: Location_Constraint;
  update_columns?: Array<Location_Update_Column>;
  where?: InputMaybe<Location_Bool_Exp>;
};

/** Ordering options when selecting data from "location". */
export type Location_Order_By = {
  bikes_aggregate?: InputMaybe<Bike_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: location */
export type Location_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "location" */
export enum Location_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "location" */
export type Location_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Location_Stddev_Fields = {
  __typename?: 'location_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Location_Stddev_Pop_Fields = {
  __typename?: 'location_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Location_Stddev_Samp_Fields = {
  __typename?: 'location_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Location_Sum_Fields = {
  __typename?: 'location_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "location" */
export enum Location_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Location_Var_Pop_Fields = {
  __typename?: 'location_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Location_Var_Samp_Fields = {
  __typename?: 'location_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Location_Variance_Fields = {
  __typename?: 'location_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "model" */
export type Model = {
  __typename?: 'model';
  /** An array relationship */
  bikes: Array<Bike>;
  /** An aggregate relationship */
  bikes_aggregate: Bike_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "model" */
export type ModelBikesArgs = {
  distinct_on?: InputMaybe<Array<Bike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Order_By>>;
  where?: InputMaybe<Bike_Bool_Exp>;
};


/** columns and relationships of "model" */
export type ModelBikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Order_By>>;
  where?: InputMaybe<Bike_Bool_Exp>;
};

/** aggregated selection of "model" */
export type Model_Aggregate = {
  __typename?: 'model_aggregate';
  aggregate?: Maybe<Model_Aggregate_Fields>;
  nodes: Array<Model>;
};

/** aggregate fields of "model" */
export type Model_Aggregate_Fields = {
  __typename?: 'model_aggregate_fields';
  avg?: Maybe<Model_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Model_Max_Fields>;
  min?: Maybe<Model_Min_Fields>;
  stddev?: Maybe<Model_Stddev_Fields>;
  stddev_pop?: Maybe<Model_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Model_Stddev_Samp_Fields>;
  sum?: Maybe<Model_Sum_Fields>;
  var_pop?: Maybe<Model_Var_Pop_Fields>;
  var_samp?: Maybe<Model_Var_Samp_Fields>;
  variance?: Maybe<Model_Variance_Fields>;
};


/** aggregate fields of "model" */
export type Model_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Model_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Model_Avg_Fields = {
  __typename?: 'model_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "model". All fields are combined with a logical 'AND'. */
export type Model_Bool_Exp = {
  _and?: InputMaybe<Array<Model_Bool_Exp>>;
  _not?: InputMaybe<Model_Bool_Exp>;
  _or?: InputMaybe<Array<Model_Bool_Exp>>;
  bikes?: InputMaybe<Bike_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "model" */
export enum Model_Constraint {
  /** unique or primary key constraint on columns "id" */
  ModelPkey = 'model_pkey'
}

/** input type for incrementing numeric columns in table "model" */
export type Model_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "model" */
export type Model_Insert_Input = {
  bikes?: InputMaybe<Bike_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Model_Max_Fields = {
  __typename?: 'model_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Model_Min_Fields = {
  __typename?: 'model_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "model" */
export type Model_Mutation_Response = {
  __typename?: 'model_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Model>;
};

/** input type for inserting object relation for remote table "model" */
export type Model_Obj_Rel_Insert_Input = {
  data: Model_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Model_On_Conflict>;
};

/** on_conflict condition type for table "model" */
export type Model_On_Conflict = {
  constraint: Model_Constraint;
  update_columns?: Array<Model_Update_Column>;
  where?: InputMaybe<Model_Bool_Exp>;
};

/** Ordering options when selecting data from "model". */
export type Model_Order_By = {
  bikes_aggregate?: InputMaybe<Bike_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: model */
export type Model_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "model" */
export enum Model_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "model" */
export type Model_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Model_Stddev_Fields = {
  __typename?: 'model_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Model_Stddev_Pop_Fields = {
  __typename?: 'model_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Model_Stddev_Samp_Fields = {
  __typename?: 'model_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Model_Sum_Fields = {
  __typename?: 'model_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "model" */
export enum Model_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Model_Var_Pop_Fields = {
  __typename?: 'model_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Model_Var_Samp_Fields = {
  __typename?: 'model_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Model_Variance_Fields = {
  __typename?: 'model_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "bike" */
  delete_bike?: Maybe<Bike_Mutation_Response>;
  /** delete single row from the table: "bike" */
  delete_bike_by_pk?: Maybe<Bike>;
  /** delete data from the table: "color" */
  delete_color?: Maybe<Color_Mutation_Response>;
  /** delete single row from the table: "color" */
  delete_color_by_pk?: Maybe<Color>;
  /** delete data from the table: "location" */
  delete_location?: Maybe<Location_Mutation_Response>;
  /** delete single row from the table: "location" */
  delete_location_by_pk?: Maybe<Location>;
  /** delete data from the table: "model" */
  delete_model?: Maybe<Model_Mutation_Response>;
  /** delete single row from the table: "model" */
  delete_model_by_pk?: Maybe<Model>;
  /** delete data from the table: "reservation" */
  delete_reservation?: Maybe<Reservation_Mutation_Response>;
  /** delete single row from the table: "reservation" */
  delete_reservation_by_pk?: Maybe<Reservation>;
  /** delete data from the table: "reservation_restricted" */
  delete_reservation_restricted?: Maybe<Reservation_Restricted_Mutation_Response>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "bike" */
  insert_bike?: Maybe<Bike_Mutation_Response>;
  /** insert a single row into the table: "bike" */
  insert_bike_one?: Maybe<Bike>;
  /** Clerk: Create User */
  insert_clerk_user_one?: Maybe<ClerkUser>;
  /** insert data into the table: "color" */
  insert_color?: Maybe<Color_Mutation_Response>;
  /** insert a single row into the table: "color" */
  insert_color_one?: Maybe<Color>;
  /** insert data into the table: "location" */
  insert_location?: Maybe<Location_Mutation_Response>;
  /** insert a single row into the table: "location" */
  insert_location_one?: Maybe<Location>;
  /** insert data into the table: "model" */
  insert_model?: Maybe<Model_Mutation_Response>;
  /** insert a single row into the table: "model" */
  insert_model_one?: Maybe<Model>;
  /** insert data into the table: "reservation" */
  insert_reservation?: Maybe<Reservation_Mutation_Response>;
  /** insert a single row into the table: "reservation" */
  insert_reservation_one?: Maybe<Reservation>;
  /** insert data into the table: "reservation_restricted" */
  insert_reservation_restricted?: Maybe<Reservation_Restricted_Mutation_Response>;
  /** insert a single row into the table: "reservation_restricted" */
  insert_reservation_restricted_one?: Maybe<Reservation_Restricted>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "bike" */
  update_bike?: Maybe<Bike_Mutation_Response>;
  /** update single row of the table: "bike" */
  update_bike_by_pk?: Maybe<Bike>;
  /** Clerk: Update User */
  update_clerk_user_by_pk?: Maybe<ClerkUser>;
  /** update data of the table: "color" */
  update_color?: Maybe<Color_Mutation_Response>;
  /** update single row of the table: "color" */
  update_color_by_pk?: Maybe<Color>;
  /** update data of the table: "location" */
  update_location?: Maybe<Location_Mutation_Response>;
  /** update single row of the table: "location" */
  update_location_by_pk?: Maybe<Location>;
  /** update data of the table: "model" */
  update_model?: Maybe<Model_Mutation_Response>;
  /** update single row of the table: "model" */
  update_model_by_pk?: Maybe<Model>;
  /** update data of the table: "reservation" */
  update_reservation?: Maybe<Reservation_Mutation_Response>;
  /** update single row of the table: "reservation" */
  update_reservation_by_pk?: Maybe<Reservation>;
  /** update data of the table: "reservation_restricted" */
  update_reservation_restricted?: Maybe<Reservation_Restricted_Mutation_Response>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_BikeArgs = {
  where: Bike_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bike_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ColorArgs = {
  where: Color_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Color_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LocationArgs = {
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Location_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ModelArgs = {
  where: Model_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Model_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ReservationArgs = {
  where: Reservation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reservation_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Reservation_RestrictedArgs = {
  where: Reservation_Restricted_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_BikeArgs = {
  objects: Array<Bike_Insert_Input>;
  on_conflict?: InputMaybe<Bike_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bike_OneArgs = {
  object: Bike_Insert_Input;
  on_conflict?: InputMaybe<Bike_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Clerk_User_OneArgs = {
  arg1: CreateUserInput;
};


/** mutation root */
export type Mutation_RootInsert_ColorArgs = {
  objects: Array<Color_Insert_Input>;
  on_conflict?: InputMaybe<Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Color_OneArgs = {
  object: Color_Insert_Input;
  on_conflict?: InputMaybe<Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LocationArgs = {
  objects: Array<Location_Insert_Input>;
  on_conflict?: InputMaybe<Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Location_OneArgs = {
  object: Location_Insert_Input;
  on_conflict?: InputMaybe<Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ModelArgs = {
  objects: Array<Model_Insert_Input>;
  on_conflict?: InputMaybe<Model_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Model_OneArgs = {
  object: Model_Insert_Input;
  on_conflict?: InputMaybe<Model_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReservationArgs = {
  objects: Array<Reservation_Insert_Input>;
  on_conflict?: InputMaybe<Reservation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reservation_OneArgs = {
  object: Reservation_Insert_Input;
  on_conflict?: InputMaybe<Reservation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reservation_RestrictedArgs = {
  objects: Array<Reservation_Restricted_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Reservation_Restricted_OneArgs = {
  object: Reservation_Restricted_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BikeArgs = {
  _inc?: InputMaybe<Bike_Inc_Input>;
  _set?: InputMaybe<Bike_Set_Input>;
  where: Bike_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bike_By_PkArgs = {
  _inc?: InputMaybe<Bike_Inc_Input>;
  _set?: InputMaybe<Bike_Set_Input>;
  pk_columns: Bike_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Clerk_User_By_PkArgs = {
  arg1: UpdateUserInput;
};


/** mutation root */
export type Mutation_RootUpdate_ColorArgs = {
  _inc?: InputMaybe<Color_Inc_Input>;
  _set?: InputMaybe<Color_Set_Input>;
  where: Color_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Color_By_PkArgs = {
  _inc?: InputMaybe<Color_Inc_Input>;
  _set?: InputMaybe<Color_Set_Input>;
  pk_columns: Color_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LocationArgs = {
  _inc?: InputMaybe<Location_Inc_Input>;
  _set?: InputMaybe<Location_Set_Input>;
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Location_By_PkArgs = {
  _inc?: InputMaybe<Location_Inc_Input>;
  _set?: InputMaybe<Location_Set_Input>;
  pk_columns: Location_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ModelArgs = {
  _inc?: InputMaybe<Model_Inc_Input>;
  _set?: InputMaybe<Model_Set_Input>;
  where: Model_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Model_By_PkArgs = {
  _inc?: InputMaybe<Model_Inc_Input>;
  _set?: InputMaybe<Model_Set_Input>;
  pk_columns: Model_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ReservationArgs = {
  _inc?: InputMaybe<Reservation_Inc_Input>;
  _set?: InputMaybe<Reservation_Set_Input>;
  where: Reservation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reservation_By_PkArgs = {
  _inc?: InputMaybe<Reservation_Inc_Input>;
  _set?: InputMaybe<Reservation_Set_Input>;
  pk_columns: Reservation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reservation_RestrictedArgs = {
  _inc?: InputMaybe<Reservation_Restricted_Inc_Input>;
  _set?: InputMaybe<Reservation_Restricted_Set_Input>;
  where: Reservation_Restricted_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "bike" */
  bike: Array<Bike>;
  /** fetch aggregated fields from the table: "bike" */
  bike_aggregate: Bike_Aggregate;
  /** fetch data from the table: "bike" using primary key columns */
  bike_by_pk?: Maybe<Bike>;
  /** fetch data from the table: "bike_rating" */
  bike_rating: Array<Bike_Rating>;
  /** fetch aggregated fields from the table: "bike_rating" */
  bike_rating_aggregate: Bike_Rating_Aggregate;
  /** Clerk: Get All Users */
  clerk_users: Array<ClerkUser>;
  /** fetch data from the table: "color" */
  color: Array<Color>;
  /** fetch aggregated fields from the table: "color" */
  color_aggregate: Color_Aggregate;
  /** fetch data from the table: "color" using primary key columns */
  color_by_pk?: Maybe<Color>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "model" */
  model: Array<Model>;
  /** fetch aggregated fields from the table: "model" */
  model_aggregate: Model_Aggregate;
  /** fetch data from the table: "model" using primary key columns */
  model_by_pk?: Maybe<Model>;
  /** fetch data from the table: "reservation" */
  reservation: Array<Reservation>;
  /** fetch aggregated fields from the table: "reservation" */
  reservation_aggregate: Reservation_Aggregate;
  /** fetch data from the table: "reservation" using primary key columns */
  reservation_by_pk?: Maybe<Reservation>;
  /** fetch data from the table: "reservation_restricted" */
  reservation_restricted: Array<Reservation_Restricted>;
  /** fetch aggregated fields from the table: "reservation_restricted" */
  reservation_restricted_aggregate: Reservation_Restricted_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootBikeArgs = {
  distinct_on?: InputMaybe<Array<Bike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Order_By>>;
  where?: InputMaybe<Bike_Bool_Exp>;
};


export type Query_RootBike_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Order_By>>;
  where?: InputMaybe<Bike_Bool_Exp>;
};


export type Query_RootBike_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootBike_RatingArgs = {
  distinct_on?: InputMaybe<Array<Bike_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Rating_Order_By>>;
  where?: InputMaybe<Bike_Rating_Bool_Exp>;
};


export type Query_RootBike_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bike_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Rating_Order_By>>;
  where?: InputMaybe<Bike_Rating_Bool_Exp>;
};


export type Query_RootColorArgs = {
  distinct_on?: InputMaybe<Array<Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Color_Order_By>>;
  where?: InputMaybe<Color_Bool_Exp>;
};


export type Query_RootColor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Color_Order_By>>;
  where?: InputMaybe<Color_Bool_Exp>;
};


export type Query_RootColor_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootModelArgs = {
  distinct_on?: InputMaybe<Array<Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Model_Order_By>>;
  where?: InputMaybe<Model_Bool_Exp>;
};


export type Query_RootModel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Model_Order_By>>;
  where?: InputMaybe<Model_Bool_Exp>;
};


export type Query_RootModel_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootReservationArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Order_By>>;
  where?: InputMaybe<Reservation_Bool_Exp>;
};


export type Query_RootReservation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Order_By>>;
  where?: InputMaybe<Reservation_Bool_Exp>;
};


export type Query_RootReservation_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootReservation_RestrictedArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Restricted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Restricted_Order_By>>;
  where?: InputMaybe<Reservation_Restricted_Bool_Exp>;
};


export type Query_RootReservation_Restricted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Restricted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Restricted_Order_By>>;
  where?: InputMaybe<Reservation_Restricted_Bool_Exp>;
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "reservation" */
export type Reservation = {
  __typename?: 'reservation';
  /** An object relationship */
  bike: Bike;
  bike_id: Scalars['Int'];
  end: Scalars['date'];
  id: Scalars['Int'];
  is_cancelled: Scalars['Boolean'];
  rating: Scalars['Int'];
  start: Scalars['date'];
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
};

/** aggregated selection of "reservation" */
export type Reservation_Aggregate = {
  __typename?: 'reservation_aggregate';
  aggregate?: Maybe<Reservation_Aggregate_Fields>;
  nodes: Array<Reservation>;
};

/** aggregate fields of "reservation" */
export type Reservation_Aggregate_Fields = {
  __typename?: 'reservation_aggregate_fields';
  avg?: Maybe<Reservation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Reservation_Max_Fields>;
  min?: Maybe<Reservation_Min_Fields>;
  stddev?: Maybe<Reservation_Stddev_Fields>;
  stddev_pop?: Maybe<Reservation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reservation_Stddev_Samp_Fields>;
  sum?: Maybe<Reservation_Sum_Fields>;
  var_pop?: Maybe<Reservation_Var_Pop_Fields>;
  var_samp?: Maybe<Reservation_Var_Samp_Fields>;
  variance?: Maybe<Reservation_Variance_Fields>;
};


/** aggregate fields of "reservation" */
export type Reservation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reservation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reservation" */
export type Reservation_Aggregate_Order_By = {
  avg?: InputMaybe<Reservation_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reservation_Max_Order_By>;
  min?: InputMaybe<Reservation_Min_Order_By>;
  stddev?: InputMaybe<Reservation_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Reservation_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Reservation_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Reservation_Sum_Order_By>;
  var_pop?: InputMaybe<Reservation_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Reservation_Var_Samp_Order_By>;
  variance?: InputMaybe<Reservation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reservation" */
export type Reservation_Arr_Rel_Insert_Input = {
  data: Array<Reservation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Reservation_On_Conflict>;
};

/** aggregate avg on columns */
export type Reservation_Avg_Fields = {
  __typename?: 'reservation_avg_fields';
  bike_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "reservation" */
export type Reservation_Avg_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reservation". All fields are combined with a logical 'AND'. */
export type Reservation_Bool_Exp = {
  _and?: InputMaybe<Array<Reservation_Bool_Exp>>;
  _not?: InputMaybe<Reservation_Bool_Exp>;
  _or?: InputMaybe<Array<Reservation_Bool_Exp>>;
  bike?: InputMaybe<Bike_Bool_Exp>;
  bike_id?: InputMaybe<Int_Comparison_Exp>;
  end?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_cancelled?: InputMaybe<Boolean_Comparison_Exp>;
  rating?: InputMaybe<Int_Comparison_Exp>;
  start?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "reservation" */
export enum Reservation_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReservationPkey = 'reservation_pkey'
}

/** input type for incrementing numeric columns in table "reservation" */
export type Reservation_Inc_Input = {
  bike_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "reservation" */
export type Reservation_Insert_Input = {
  bike?: InputMaybe<Bike_Obj_Rel_Insert_Input>;
  bike_id?: InputMaybe<Scalars['Int']>;
  end?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  is_cancelled?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Reservation_Max_Fields = {
  __typename?: 'reservation_max_fields';
  bike_id?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['date']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "reservation" */
export type Reservation_Max_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reservation_Min_Fields = {
  __typename?: 'reservation_min_fields';
  bike_id?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['date']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "reservation" */
export type Reservation_Min_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "reservation" */
export type Reservation_Mutation_Response = {
  __typename?: 'reservation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Reservation>;
};

/** on_conflict condition type for table "reservation" */
export type Reservation_On_Conflict = {
  constraint: Reservation_Constraint;
  update_columns?: Array<Reservation_Update_Column>;
  where?: InputMaybe<Reservation_Bool_Exp>;
};

/** Ordering options when selecting data from "reservation". */
export type Reservation_Order_By = {
  bike?: InputMaybe<Bike_Order_By>;
  bike_id?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_cancelled?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reservation */
export type Reservation_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "reservation_restricted" */
export type Reservation_Restricted = {
  __typename?: 'reservation_restricted';
  bike_id?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['date']>;
  start?: Maybe<Scalars['date']>;
};

/** aggregated selection of "reservation_restricted" */
export type Reservation_Restricted_Aggregate = {
  __typename?: 'reservation_restricted_aggregate';
  aggregate?: Maybe<Reservation_Restricted_Aggregate_Fields>;
  nodes: Array<Reservation_Restricted>;
};

/** aggregate fields of "reservation_restricted" */
export type Reservation_Restricted_Aggregate_Fields = {
  __typename?: 'reservation_restricted_aggregate_fields';
  avg?: Maybe<Reservation_Restricted_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Reservation_Restricted_Max_Fields>;
  min?: Maybe<Reservation_Restricted_Min_Fields>;
  stddev?: Maybe<Reservation_Restricted_Stddev_Fields>;
  stddev_pop?: Maybe<Reservation_Restricted_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reservation_Restricted_Stddev_Samp_Fields>;
  sum?: Maybe<Reservation_Restricted_Sum_Fields>;
  var_pop?: Maybe<Reservation_Restricted_Var_Pop_Fields>;
  var_samp?: Maybe<Reservation_Restricted_Var_Samp_Fields>;
  variance?: Maybe<Reservation_Restricted_Variance_Fields>;
};


/** aggregate fields of "reservation_restricted" */
export type Reservation_Restricted_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reservation_Restricted_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reservation_restricted" */
export type Reservation_Restricted_Aggregate_Order_By = {
  avg?: InputMaybe<Reservation_Restricted_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reservation_Restricted_Max_Order_By>;
  min?: InputMaybe<Reservation_Restricted_Min_Order_By>;
  stddev?: InputMaybe<Reservation_Restricted_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Reservation_Restricted_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Reservation_Restricted_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Reservation_Restricted_Sum_Order_By>;
  var_pop?: InputMaybe<Reservation_Restricted_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Reservation_Restricted_Var_Samp_Order_By>;
  variance?: InputMaybe<Reservation_Restricted_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reservation_restricted" */
export type Reservation_Restricted_Arr_Rel_Insert_Input = {
  data: Array<Reservation_Restricted_Insert_Input>;
};

/** aggregate avg on columns */
export type Reservation_Restricted_Avg_Fields = {
  __typename?: 'reservation_restricted_avg_fields';
  bike_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "reservation_restricted" */
export type Reservation_Restricted_Avg_Order_By = {
  bike_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reservation_restricted". All fields are combined with a logical 'AND'. */
export type Reservation_Restricted_Bool_Exp = {
  _and?: InputMaybe<Array<Reservation_Restricted_Bool_Exp>>;
  _not?: InputMaybe<Reservation_Restricted_Bool_Exp>;
  _or?: InputMaybe<Array<Reservation_Restricted_Bool_Exp>>;
  bike_id?: InputMaybe<Int_Comparison_Exp>;
  end?: InputMaybe<Date_Comparison_Exp>;
  start?: InputMaybe<Date_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "reservation_restricted" */
export type Reservation_Restricted_Inc_Input = {
  bike_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "reservation_restricted" */
export type Reservation_Restricted_Insert_Input = {
  bike_id?: InputMaybe<Scalars['Int']>;
  end?: InputMaybe<Scalars['date']>;
  start?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Reservation_Restricted_Max_Fields = {
  __typename?: 'reservation_restricted_max_fields';
  bike_id?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['date']>;
  start?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "reservation_restricted" */
export type Reservation_Restricted_Max_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reservation_Restricted_Min_Fields = {
  __typename?: 'reservation_restricted_min_fields';
  bike_id?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['date']>;
  start?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "reservation_restricted" */
export type Reservation_Restricted_Min_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "reservation_restricted" */
export type Reservation_Restricted_Mutation_Response = {
  __typename?: 'reservation_restricted_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Reservation_Restricted>;
};

/** Ordering options when selecting data from "reservation_restricted". */
export type Reservation_Restricted_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
};

/** select columns of table "reservation_restricted" */
export enum Reservation_Restricted_Select_Column {
  /** column name */
  BikeId = 'bike_id',
  /** column name */
  End = 'end',
  /** column name */
  Start = 'start'
}

/** input type for updating data in table "reservation_restricted" */
export type Reservation_Restricted_Set_Input = {
  bike_id?: InputMaybe<Scalars['Int']>;
  end?: InputMaybe<Scalars['date']>;
  start?: InputMaybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Reservation_Restricted_Stddev_Fields = {
  __typename?: 'reservation_restricted_stddev_fields';
  bike_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "reservation_restricted" */
export type Reservation_Restricted_Stddev_Order_By = {
  bike_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reservation_Restricted_Stddev_Pop_Fields = {
  __typename?: 'reservation_restricted_stddev_pop_fields';
  bike_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "reservation_restricted" */
export type Reservation_Restricted_Stddev_Pop_Order_By = {
  bike_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reservation_Restricted_Stddev_Samp_Fields = {
  __typename?: 'reservation_restricted_stddev_samp_fields';
  bike_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "reservation_restricted" */
export type Reservation_Restricted_Stddev_Samp_Order_By = {
  bike_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Reservation_Restricted_Sum_Fields = {
  __typename?: 'reservation_restricted_sum_fields';
  bike_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "reservation_restricted" */
export type Reservation_Restricted_Sum_Order_By = {
  bike_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Reservation_Restricted_Var_Pop_Fields = {
  __typename?: 'reservation_restricted_var_pop_fields';
  bike_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "reservation_restricted" */
export type Reservation_Restricted_Var_Pop_Order_By = {
  bike_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reservation_Restricted_Var_Samp_Fields = {
  __typename?: 'reservation_restricted_var_samp_fields';
  bike_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "reservation_restricted" */
export type Reservation_Restricted_Var_Samp_Order_By = {
  bike_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Reservation_Restricted_Variance_Fields = {
  __typename?: 'reservation_restricted_variance_fields';
  bike_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "reservation_restricted" */
export type Reservation_Restricted_Variance_Order_By = {
  bike_id?: InputMaybe<Order_By>;
};

/** select columns of table "reservation" */
export enum Reservation_Select_Column {
  /** column name */
  BikeId = 'bike_id',
  /** column name */
  End = 'end',
  /** column name */
  Id = 'id',
  /** column name */
  IsCancelled = 'is_cancelled',
  /** column name */
  Rating = 'rating',
  /** column name */
  Start = 'start',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "reservation" */
export type Reservation_Set_Input = {
  bike_id?: InputMaybe<Scalars['Int']>;
  end?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  is_cancelled?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['date']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Reservation_Stddev_Fields = {
  __typename?: 'reservation_stddev_fields';
  bike_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "reservation" */
export type Reservation_Stddev_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reservation_Stddev_Pop_Fields = {
  __typename?: 'reservation_stddev_pop_fields';
  bike_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "reservation" */
export type Reservation_Stddev_Pop_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reservation_Stddev_Samp_Fields = {
  __typename?: 'reservation_stddev_samp_fields';
  bike_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "reservation" */
export type Reservation_Stddev_Samp_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Reservation_Sum_Fields = {
  __typename?: 'reservation_sum_fields';
  bike_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "reservation" */
export type Reservation_Sum_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** update columns of table "reservation" */
export enum Reservation_Update_Column {
  /** column name */
  BikeId = 'bike_id',
  /** column name */
  End = 'end',
  /** column name */
  Id = 'id',
  /** column name */
  IsCancelled = 'is_cancelled',
  /** column name */
  Rating = 'rating',
  /** column name */
  Start = 'start',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Reservation_Var_Pop_Fields = {
  __typename?: 'reservation_var_pop_fields';
  bike_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "reservation" */
export type Reservation_Var_Pop_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reservation_Var_Samp_Fields = {
  __typename?: 'reservation_var_samp_fields';
  bike_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "reservation" */
export type Reservation_Var_Samp_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Reservation_Variance_Fields = {
  __typename?: 'reservation_variance_fields';
  bike_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "reservation" */
export type Reservation_Variance_Order_By = {
  bike_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "bike" */
  bike: Array<Bike>;
  /** fetch aggregated fields from the table: "bike" */
  bike_aggregate: Bike_Aggregate;
  /** fetch data from the table: "bike" using primary key columns */
  bike_by_pk?: Maybe<Bike>;
  /** fetch data from the table: "bike_rating" */
  bike_rating: Array<Bike_Rating>;
  /** fetch aggregated fields from the table: "bike_rating" */
  bike_rating_aggregate: Bike_Rating_Aggregate;
  /** fetch data from the table: "color" */
  color: Array<Color>;
  /** fetch aggregated fields from the table: "color" */
  color_aggregate: Color_Aggregate;
  /** fetch data from the table: "color" using primary key columns */
  color_by_pk?: Maybe<Color>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "model" */
  model: Array<Model>;
  /** fetch aggregated fields from the table: "model" */
  model_aggregate: Model_Aggregate;
  /** fetch data from the table: "model" using primary key columns */
  model_by_pk?: Maybe<Model>;
  /** fetch data from the table: "reservation" */
  reservation: Array<Reservation>;
  /** fetch aggregated fields from the table: "reservation" */
  reservation_aggregate: Reservation_Aggregate;
  /** fetch data from the table: "reservation" using primary key columns */
  reservation_by_pk?: Maybe<Reservation>;
  /** fetch data from the table: "reservation_restricted" */
  reservation_restricted: Array<Reservation_Restricted>;
  /** fetch aggregated fields from the table: "reservation_restricted" */
  reservation_restricted_aggregate: Reservation_Restricted_Aggregate;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootBikeArgs = {
  distinct_on?: InputMaybe<Array<Bike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Order_By>>;
  where?: InputMaybe<Bike_Bool_Exp>;
};


export type Subscription_RootBike_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bike_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Order_By>>;
  where?: InputMaybe<Bike_Bool_Exp>;
};


export type Subscription_RootBike_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootBike_RatingArgs = {
  distinct_on?: InputMaybe<Array<Bike_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Rating_Order_By>>;
  where?: InputMaybe<Bike_Rating_Bool_Exp>;
};


export type Subscription_RootBike_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bike_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bike_Rating_Order_By>>;
  where?: InputMaybe<Bike_Rating_Bool_Exp>;
};


export type Subscription_RootColorArgs = {
  distinct_on?: InputMaybe<Array<Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Color_Order_By>>;
  where?: InputMaybe<Color_Bool_Exp>;
};


export type Subscription_RootColor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Color_Order_By>>;
  where?: InputMaybe<Color_Bool_Exp>;
};


export type Subscription_RootColor_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootModelArgs = {
  distinct_on?: InputMaybe<Array<Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Model_Order_By>>;
  where?: InputMaybe<Model_Bool_Exp>;
};


export type Subscription_RootModel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Model_Order_By>>;
  where?: InputMaybe<Model_Bool_Exp>;
};


export type Subscription_RootModel_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootReservationArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Order_By>>;
  where?: InputMaybe<Reservation_Bool_Exp>;
};


export type Subscription_RootReservation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Order_By>>;
  where?: InputMaybe<Reservation_Bool_Exp>;
};


export type Subscription_RootReservation_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootReservation_RestrictedArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Restricted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Restricted_Order_By>>;
  where?: InputMaybe<Reservation_Restricted_Bool_Exp>;
};


export type Subscription_RootReservation_Restricted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Restricted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Restricted_Order_By>>;
  where?: InputMaybe<Reservation_Restricted_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['String'];
  is_manager: Scalars['Boolean'];
  last_name: Scalars['String'];
  /** An array relationship */
  reservations: Array<Reservation>;
  /** An aggregate relationship */
  reservations_aggregate: Reservation_Aggregate;
};


/** columns and relationships of "user" */
export type UserReservationsArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Order_By>>;
  where?: InputMaybe<Reservation_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserReservations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reservation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reservation_Order_By>>;
  where?: InputMaybe<Reservation_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_manager?: InputMaybe<Boolean_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  reservations?: InputMaybe<Reservation_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  is_manager?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  reservations?: InputMaybe<Reservation_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_manager?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  reservations_aggregate?: InputMaybe<Reservation_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsManager = 'is_manager',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  is_manager?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsManager = 'is_manager',
  /** column name */
  LastName = 'last_name'
}

export type BikeFragmentFragment = { __typename?: 'bike', id: number, model_id: number, color_id: number, location_id: number, is_rentable: boolean, model: { __typename?: 'model', name: string }, color: { __typename?: 'color', name: string }, location: { __typename?: 'location', name: string }, rating?: { __typename?: 'bike_rating', avg_rating?: any | null } | null };

export type GetAllBikesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBikesQuery = { __typename?: 'query_root', bike: Array<{ __typename?: 'bike', id: number, model_id: number, color_id: number, location_id: number, is_rentable: boolean, model: { __typename?: 'model', name: string }, color: { __typename?: 'color', name: string }, location: { __typename?: 'location', name: string }, rating?: { __typename?: 'bike_rating', avg_rating?: any | null } | null }> };

export const BikeFragmentFragmentDoc = gql`
    fragment BikeFragment on bike {
  id
  model_id
  model {
    name
  }
  color_id
  color {
    name
  }
  location_id
  location {
    name
  }
  rating {
    avg_rating
  }
  is_rentable
}
    `;
export const GetAllBikesDocument = gql`
    query GetAllBikes {
  bike {
    ...BikeFragment
  }
}
    ${BikeFragmentFragmentDoc}`;

/**
 * __useGetAllBikesQuery__
 *
 * To run a query within a React component, call `useGetAllBikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBikesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBikesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBikesQuery, GetAllBikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBikesQuery, GetAllBikesQueryVariables>(GetAllBikesDocument, options);
      }
export function useGetAllBikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBikesQuery, GetAllBikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBikesQuery, GetAllBikesQueryVariables>(GetAllBikesDocument, options);
        }
export type GetAllBikesQueryHookResult = ReturnType<typeof useGetAllBikesQuery>;
export type GetAllBikesLazyQueryHookResult = ReturnType<typeof useGetAllBikesLazyQuery>;
export type GetAllBikesQueryResult = Apollo.QueryResult<GetAllBikesQuery, GetAllBikesQueryVariables>;