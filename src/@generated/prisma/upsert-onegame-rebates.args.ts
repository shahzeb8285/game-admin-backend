import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_rebatesWhereUniqueInput } from '../game-rebates/game-rebates-where-unique.input';
import { Type } from 'class-transformer';
import { game_rebatesCreateInput } from '../game-rebates/game-rebates-create.input';
import { game_rebatesUpdateInput } from '../game-rebates/game-rebates-update.input';

@ArgsType()
export class UpsertOnegameRebatesArgs {

    @Field(() => game_rebatesWhereUniqueInput, {nullable:false})
    @Type(() => game_rebatesWhereUniqueInput)
    where!: game_rebatesWhereUniqueInput;

    @Field(() => game_rebatesCreateInput, {nullable:false})
    @Type(() => game_rebatesCreateInput)
    create!: game_rebatesCreateInput;

    @Field(() => game_rebatesUpdateInput, {nullable:false})
    @Type(() => game_rebatesUpdateInput)
    update!: game_rebatesUpdateInput;
}
