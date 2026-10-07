import { createClient } from "@supabase/supabase-js"

// Helper: bỏ dấu tiếng Việt
export function removeVietnameseTones(str: string): string {
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
}

// Helper: tạo tên file từ title
export function generateFileName(title: string): string {
    const acronym = removeVietnameseTones(title)
        .split(' ')
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase())
        .join('')

    const now = new Date()
    const date = now.toLocaleDateString('vi-VN').split('/').reverse().join('-') // DD-MM-YYYY
    const time = `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`

    return `${acronym}_${date}_${time}`
}

export const getSupabaseClient = () => createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)