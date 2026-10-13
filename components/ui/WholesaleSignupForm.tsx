'use client'

import { Button, Form, Input } from 'antd'

type MembershipOption = {
  value: string
  label: string
  price: number
}

const membershipOptions: MembershipOption[] = [
  { value: 'wholesale', label: 'Wholesale customer', price: 0 },
]

const WholesaleSignupForm = () => {
  const [form] = Form.useForm()
  const selectedMembership: string = Form.useWatch('membership', form)
  const membership = membershipOptions.find((opt) => opt.value === selectedMembership)
  const total = membership?.price ?? 0

  const onFinish = (values: {
    username: string
    email: string
    businessName: string
    businessAddress: string
    phone: string
    password: string
    confirmPassword: string
  }) => {
    console.log('Form values:', values)
    // TODO: gọi API đăng ký ở đây
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      requiredMark="optional"
      initialValues={{ membership: 'wholesale' }}
      className="wholesale-form"
    >
      <Form.Item name="membership" hidden>
        <Input />
      </Form.Item>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3">
        <Form.Item
          label="Username"
          name="username"
          className="!mb-4"
          rules={[{ required: true, message: 'Please enter your username' }]}
        >
          <Input size="large" placeholder="Choose a username" className="!rounded-xl" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          className="!mb-4"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input size="large" placeholder="you@business.com" className="!rounded-xl" />
        </Form.Item>
      </div>

      <Form.Item
        label="Business name"
        name="businessName"
        className="!mb-4"
        rules={[{ required: true, message: 'Please enter your business name' }]}
      >
        <Input size="large" placeholder="Your salon or shop name" className="!rounded-xl" />
      </Form.Item>

      <Form.Item
        label="Business address"
        name="businessAddress"
        className="!mb-4"
        rules={[{ required: true, message: 'Please enter your business address' }]}
      >
        <Input size="large" placeholder="Street, city, state, ZIP" className="!rounded-xl" />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        className="!mb-4"
        rules={[{ required: true, message: 'Please enter your phone number' }]}
      >
        <Input size="large" placeholder="(555) 000-0000" className="!rounded-xl" />
      </Form.Item>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3">
        <Form.Item
          label="Password"
          name="password"
          className="!mb-4"
          rules={[
            { required: true, message: 'Please enter your password' },
            { min: 6, message: 'Password must be at least 6 characters' },
          ]}
          hasFeedback
        >
          <Input.Password
            size="large"
            placeholder="Min. 6 characters"
            className="!rounded-xl"
          />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirmPassword"
          className="!mb-4"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Passwords do not match'))
              },
            }),
          ]}
        >
          <Input.Password
            size="large"
            placeholder="Re-enter password"
            className="!rounded-xl"
          />
        </Form.Item>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-xl bg-neutral-50 border border-neutral-100 py-3 mb-5">
        <div className="text-left">
          <p className="text-sm font-semibold text-neutral-900">
            {membership?.label ?? 'Wholesale customer'}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            Sign up free — no membership fee
          </p>
        </div>
        <span className="shrink-0 text-sm font-bold text-neutral-900">
          {total === 0 ? 'Free' : `$${total}`}
        </span>
      </div>

      <Form.Item className="!mb-0">
        <Button
          type="primary"
          htmlType="submit"
          block
          size="large"
          className="!h-12 !rounded-xl !bg-neutral-900 !border-neutral-900 hover:!bg-neutral-800 hover:!border-neutral-800 !font-semibold !tracking-wide"
        >
          Create wholesale account
        </Button>
      </Form.Item>
    </Form>
  )
}

export default WholesaleSignupForm