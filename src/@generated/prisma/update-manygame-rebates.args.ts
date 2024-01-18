import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_rebatesUpdateManyMutationInput } from '../game-rebates/game-rebates-update-many-mutation.input';
import { Type } from 'class-transformer';
import { game_rebatesWhereInput } from '../game-rebates/game-rebates-where.input';

@ArgsType()
export class UpdateManygameRebatesArgs {

    @Field(() => game_rebatesUpdateManyMutationInput, {nullable:false})
    @Type(() => game_rebatesUpdateManyMutationInput)
    data!: game_rebatesUpdateManyMutationInput;

    @Field(() => game_rebatesWhereInput, {nullable:true})
    @Type(() => game_rebatesWhereInput)
    where?: game_rebatesWhereInput;
}
