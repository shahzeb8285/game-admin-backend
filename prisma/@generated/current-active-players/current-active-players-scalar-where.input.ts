import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class current_active_playersScalarWhereInput {

    @Field(() => [current_active_playersScalarWhereInput], {nullable:true})
    AND?: Array<current_active_playersScalarWhereInput>;

    @Field(() => [current_active_playersScalarWhereInput], {nullable:true})
    OR?: Array<current_active_playersScalarWhereInput>;

    @Field(() => [current_active_playersScalarWhereInput], {nullable:true})
    NOT?: Array<current_active_playersScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    last_active_time?: DateTimeFilter;
}
