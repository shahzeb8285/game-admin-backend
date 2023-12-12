import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionType } from './transaction-type.enum';

@InputType()
export class EnumTransactionTypeFieldUpdateOperationsInput {

    @Field(() => TransactionType, {nullable:true})
    set?: keyof typeof TransactionType;
}
