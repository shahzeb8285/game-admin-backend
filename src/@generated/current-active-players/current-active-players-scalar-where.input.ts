import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CurrentActivePlayersScalarWhereInput {

    @Field(() => [CurrentActivePlayersScalarWhereInput], {nullable:true})
    AND?: Array<CurrentActivePlayersScalarWhereInput>;

    @Field(() => [CurrentActivePlayersScalarWhereInput], {nullable:true})
    OR?: Array<CurrentActivePlayersScalarWhereInput>;

    @Field(() => [CurrentActivePlayersScalarWhereInput], {nullable:true})
    NOT?: Array<CurrentActivePlayersScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    last_active_time?: DateTimeFilter;
}
