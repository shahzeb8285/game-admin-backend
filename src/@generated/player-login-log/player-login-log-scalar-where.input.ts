import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PlayerLoginLogScalarWhereInput {

    @Field(() => [PlayerLoginLogScalarWhereInput], {nullable:true})
    AND?: Array<PlayerLoginLogScalarWhereInput>;

    @Field(() => [PlayerLoginLogScalarWhereInput], {nullable:true})
    OR?: Array<PlayerLoginLogScalarWhereInput>;

    @Field(() => [PlayerLoginLogScalarWhereInput], {nullable:true})
    NOT?: Array<PlayerLoginLogScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    login_time?: DateTimeFilter;
}
