'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { Button, Form, Input, Radio } from 'antd';

type MembershipOption = {
  value: string;
  label: string;
  price: number;
};

const membershipOptions: MembershipOption[] = [
  { value: 'wholesale', label: 'Wholesale customer', price: 0 },
];

const WholesaleSignup = () => {

    const [form] = Form.useForm()
    const selectedMembership: string = Form.useWatch('membership', form)

    const total = membershipOptions.find((opt) => opt.value === selectedMembership)?.price ?? 0

    const onFinish = (values: {
        username: string;
        email: string;
        businessName: string;
        businessAddress: string;
        phone: string;
        password: string;
        confirmPassword: string;
    }) => {
        console.log('Form values:', values);
        // TODO: gọi API đăng ký ở đây
    };

  return (
        <div>
            <Header />

            <div className='w-full relative'>
                <img src="./images/signupbanner.png" alt="signup-banner" className="w-full h-auto" />

                <div className='w-full md:w-[60%] lg:w-[40%] bg-white p-5 md:absolute md:top-1/2 md:right-10 lg:right-20 md:-translate-y-1/2 md:border-[5px] md:border-solid md:border-black md:rounded-[10px] mx-auto'>
                    <p className="text-[20px] md:text-[24px] text-center font-bold">Register</p>
                    <p className="text-sm md:text-base text-gray-600 text-center mb-6">Fill the form below to create an account.</p>

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        requiredMark={true}
                        initialValues={{ membership: 'wholesale' }}
                    >
                        <Form.Item
                        label="Username"
                        name="username"
                        className='!mb-[10px]'
                        rules={[{ required: true, message: 'Please enter your username' }]}
                        >
                        <Input placeholder="Enter your username" />
                        </Form.Item>

                        <Form.Item
                        label="User Email"
                        name="email"
                        className='!mb-[10px]'
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' },
                        ]}
                        >
                        <Input placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item
                        label="Business name"
                        name="businessName"
                        className='!mb-[10px]'
                        rules={[{ required: true, message: 'Please enter your business name' }]}
                        >
                        <Input placeholder="Enter your business name" />
                        </Form.Item>

                        <Form.Item
                        label="Business address"
                        name="businessAddress"
                        className='!mb-[10px]'
                        rules={[{ required: true, message: 'Please enter your business address' }]}
                        >
                        <Input placeholder="Enter your business address" />
                        </Form.Item>

                        <Form.Item
                        label="Phone"
                        name="phone"
                        className='!mb-[10px]'
                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                        >
                        <Input placeholder="Enter your phone number" />
                        </Form.Item>

                        <Form.Item
                        label="User Password"
                        name="password"
                        className='!mb-[10px]'
                        rules={[
                            { required: true, message: 'Please enter your password' },
                            { min: 6, message: 'Password must be at least 6 characters' },
                        ]}
                        hasFeedback
                        >
                        <Input.Password placeholder="Enter your password" />
                        </Form.Item>

                        <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        className='!mb-[10px]'
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please confirm your password' },
                            ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                                }
                                return Promise.reject(new Error('Passwords do not match'));
                            },
                            }),
                        ]}
                        >
                        <Input.Password placeholder="Confirm your password" />
                        </Form.Item>

                        <Form.Item
                        label="Membership Field"
                        name="membership"
                        className='!mb-[10px]'
                        rules={[{ required: true, message: 'Please select a membership' }]}
                        >
                            <div className="w-full flex flex-row justify-between items-center border border-solid border-black bg-gray-100 rounded-lg p-2 mb-4">
                                <span>Wholesale customer</span>
                                <span className="font-bold">Free</span>
                            </div>
                        </Form.Item>

                        <hr />

                        <div className="w-full flex flex-row justify-between items-center border border-dashed border-black bg-gray-100 rounded-lg px-4 py-4 mt-4 mb-4">
                            <span className="font-bold">Total</span>
                            <span className="font-bold">${total.toFixed(2)}</span>
                        </div>

                        <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            className="!bg-black !border-black uppercase tracking-wide"
                        >
                            Submit
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

            <Footer />
        </div>
  )
}

export default WholesaleSignup
