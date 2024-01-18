import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminOrderByWithRelationInput } from '../admin/admin-order-by-with-relation.input';

@InputType()
export class AdminLoginLogOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    login_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_id_r?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    login_time?: keyof typeof SortOrder;

    @Field(() => AdminOrderByWithRelationInput, {nullable:true})
    admins?: AdminOrderByWithRelationInput;
}
