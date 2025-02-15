export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      files: {
        Row: {
          ai_analysis: Json | null
          analysis_completed_at: string | null
          analysis_error: string | null
          analysis_started_at: string | null
          analysis_status: string | null
          content_structure: Json | null
          content_type: string | null
          created_at: string | null
          description: string | null
          document_type: string | null
          error_message: string | null
          extracted_text: string | null
          file_path: string
          filename: string
          id: string
          metadata: Json | null
          named_entities: Json | null
          parsed_content: Json | null
          processing_completed_at: string | null
          processing_metadata: Json | null
          processing_started_at: string | null
          processing_status:
            | Database["public"]["Enums"]["file_processing_status"]
            | null
          public: boolean | null
          size: number | null
          status: string | null
          thumbnail_url: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
          visualization_config: Json | null
          visualization_data: Json | null
          visualization_suggestions: Json | null
          visualization_type: string | null
        }
        Insert: {
          ai_analysis?: Json | null
          analysis_completed_at?: string | null
          analysis_error?: string | null
          analysis_started_at?: string | null
          analysis_status?: string | null
          content_structure?: Json | null
          content_type?: string | null
          created_at?: string | null
          description?: string | null
          document_type?: string | null
          error_message?: string | null
          extracted_text?: string | null
          file_path: string
          filename: string
          id?: string
          metadata?: Json | null
          named_entities?: Json | null
          parsed_content?: Json | null
          processing_completed_at?: string | null
          processing_metadata?: Json | null
          processing_started_at?: string | null
          processing_status?:
            | Database["public"]["Enums"]["file_processing_status"]
            | null
          public?: boolean | null
          size?: number | null
          status?: string | null
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          visualization_config?: Json | null
          visualization_data?: Json | null
          visualization_suggestions?: Json | null
          visualization_type?: string | null
        }
        Update: {
          ai_analysis?: Json | null
          analysis_completed_at?: string | null
          analysis_error?: string | null
          analysis_started_at?: string | null
          analysis_status?: string | null
          content_structure?: Json | null
          content_type?: string | null
          created_at?: string | null
          description?: string | null
          document_type?: string | null
          error_message?: string | null
          extracted_text?: string | null
          file_path?: string
          filename?: string
          id?: string
          metadata?: Json | null
          named_entities?: Json | null
          parsed_content?: Json | null
          processing_completed_at?: string | null
          processing_metadata?: Json | null
          processing_started_at?: string | null
          processing_status?:
            | Database["public"]["Enums"]["file_processing_status"]
            | null
          public?: boolean | null
          size?: number | null
          status?: string | null
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          visualization_config?: Json | null
          visualization_data?: Json | null
          visualization_suggestions?: Json | null
          visualization_type?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      file_processing_status: "pending" | "processing" | "completed" | "failed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
