export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          password: string;
          name: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          password: string;
          name: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: never;
          email?: string;
          password?: string;
          name?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    // Views: {
    //     [_ in never]: never;
    // };
    // Functions: {
    //     [_ in never]: never;
    // };
    // Enums: {
    //     [_ in never]: never;
    // };
    // CompositeTypes: {
    //     [_ in never]: never;
    // };
  };
}
