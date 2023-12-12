import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { game_rebatesCreateManyInput } from '../game-rebates/game-rebates-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManygameRebatesArgs {

    @Field(() => [game_rebatesCreateManyInput], {nullable:false})
    @Type(() => game_rebatesCreateManyInput)
    data!: Array<game_rebatesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
