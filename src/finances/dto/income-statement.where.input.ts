import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class IncomeStatementWhereInput {

    @Field(() => String, {nullable:false})
    fromDate: string;
    
    @Field(() => String, {nullable:false})
    toDate: string;
   
    @Field(() => String, {nullable:false})
    parentId: string;


}
