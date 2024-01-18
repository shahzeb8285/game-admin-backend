import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_rebatesWhereUniqueInput } from '../game-rebates/game-rebates-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnegameRebatesArgs {

    @Field(() => game_rebatesWhereUniqueInput, {nullable:false})
    @Type(() => game_rebatesWhereUniqueInput)
    where!: game_rebatesWhereUniqueInput;
}
