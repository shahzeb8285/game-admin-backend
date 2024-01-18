import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_rebatesUpdateInput } from '../game-rebates/game-rebates-update.input';
import { Type } from 'class-transformer';
import { game_rebatesWhereUniqueInput } from '../game-rebates/game-rebates-where-unique.input';

@ArgsType()
export class UpdateOnegameRebatesArgs {

    @Field(() => game_rebatesUpdateInput, {nullable:false})
    @Type(() => game_rebatesUpdateInput)
    data!: game_rebatesUpdateInput;

    @Field(() => game_rebatesWhereUniqueInput, {nullable:false})
    @Type(() => game_rebatesWhereUniqueInput)
    where!: game_rebatesWhereUniqueInput;
}
