import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerWalletCreateManyInput } from './player-wallet-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPlayerWalletArgs {

    @Field(() => [PlayerWalletCreateManyInput], {nullable:false})
    @Type(() => PlayerWalletCreateManyInput)
    data!: Array<PlayerWalletCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
