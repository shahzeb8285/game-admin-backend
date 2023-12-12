import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class game_historyScalarWhereInput {

    @Field(() => [game_historyScalarWhereInput], {nullable:true})
    AND?: Array<game_historyScalarWhereInput>;

    @Field(() => [game_historyScalarWhereInput], {nullable:true})
    OR?: Array<game_historyScalarWhereInput>;

    @Field(() => [game_historyScalarWhereInput], {nullable:true})
    NOT?: Array<game_historyScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    game_history_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    game_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id_r?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    i_gamedesc?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    bet_amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    win_amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    transaction_date?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;
}
