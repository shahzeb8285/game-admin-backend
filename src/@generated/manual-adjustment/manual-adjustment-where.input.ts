import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlayerRelationFilter } from '../player/player-relation-filter.input';
import { AdminRelationFilter } from '../admin/admin-relation-filter.input';

@InputType()
export class ManualAdjustmentWhereInput {

    @Field(() => [ManualAdjustmentWhereInput], {nullable:true})
    AND?: Array<ManualAdjustmentWhereInput>;

    @Field(() => [ManualAdjustmentWhereInput], {nullable:true})
    OR?: Array<ManualAdjustmentWhereInput>;

    @Field(() => [ManualAdjustmentWhereInput], {nullable:true})
    NOT?: Array<ManualAdjustmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    manual_adjustment_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    player_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    reason?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    cdate?: DateTimeFilter;

    @Field(() => PlayerRelationFilter, {nullable:true})
    players?: PlayerRelationFilter;

    @Field(() => AdminRelationFilter, {nullable:true})
    admins?: AdminRelationFilter;
}
