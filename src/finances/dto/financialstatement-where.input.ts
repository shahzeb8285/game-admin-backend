import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FinancialStatementWhereInput {

    @Field(() => String, {nullable:false})
    fromDate: string;
    
    @Field(() => String, {nullable:false})
    toDate: string;

    @Field(() => String, {nullable:true})
    playerName?: string;

    @Field(() => String, {nullable:true})
    agentName?: string;


}
