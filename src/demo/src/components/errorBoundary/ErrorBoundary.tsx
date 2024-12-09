// src/components/ErrorBoundary/ErrorBoundary.tsx
import React, { ReactNode } from 'react';

// ErrorBoundary의 Props 타입 정의
interface ErrorBoundaryProps {
  children: ReactNode;
}

// ErrorBoundary의 State 타입 정의
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // 에러가 발생했을 때 상태를 업데이트
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  // 에러 정보를 로깅하거나 추가 작업 수행
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error, errorInfo });
    // 에러 로깅 서비스에 에러를 기록
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {

      return (
        <div style={styles.container}>
          <h1>문제가 발생했습니다.</h1>
          <details style={styles.details}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // 에러가 없으면 정상적으로 자식 컴포넌트를 렌더링
    return this.props.children; 
  }
}

// 간단한 인라인 스타일 (필요에 따라 수정 가능)
const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center' as const,
    color: '#333',
  },
  details: {
    whiteSpace: 'pre-wrap' as const,
    textAlign: 'left' as const,
    marginTop: '1rem',
    backgroundColor: '#f8f8f8',
    padding: '1rem',
    borderRadius: '5px',
  },
};

export default ErrorBoundary;
