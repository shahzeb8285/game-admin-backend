import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerWalletWhereInput } from './player-wallet-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPlayerWalletArgs {

    @Field(() => PlayerWalletWhereInput, {nullable:true})
    @Type(() => PlayerWalletWhereInput)
    where?: PlayerWalletWhereInput;
}
