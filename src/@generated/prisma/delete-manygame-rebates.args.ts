import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_rebatesWhereInput } from '../game-rebates/game-rebates-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManygameRebatesArgs {

    @Field(() => game_rebatesWhereInput, {nullable:true})
    @Type(() => game_rebatesWhereInput)
    where?: game_rebatesWhereInput;
}
