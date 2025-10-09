interface EmailTemplateProps {
  firstName: string
  subject?: string
  messageType?: 'welcome' | 'project-update' | 'support' | 'newsletter'
}

export function EmailTemplate({
  firstName,
  subject = 'Welcome to Moontag',
  messageType = 'welcome',
}: EmailTemplateProps) {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: '#ffffff',
        color: '#374151',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: '#1f2937',
          padding: '24px',
          borderBottom: '4px solid #00BCD4',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#1f2937',
              border: '2px solid #00BCD4',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00BCD4',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            M
          </div>
          <div>
            <div
              style={{
                color: '#ffffff',
                fontSize: '20px',
                fontWeight: 'bold',
                margin: '0',
              }}
            >
              Moontag
            </div>
            <div
              style={{
                color: '#9ca3af',
                fontSize: '12px',
                fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                margin: '0',
              }}
            >
              v2.1.0
            </div>
          </div>
        </div>

        <h1
          style={{
            color: '#ffffff',
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0',
            lineHeight: '1.2',
          }}
        >
          {subject}
        </h1>
      </div>

      {/* Status Bar */}
      <div
        style={{
          backgroundColor: '#f9fafb',
          padding: '12px 24px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          fontSize: '12px',
          fontFamily: 'Monaco, Consolas, "Courier New", monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
            }}
          ></div>
          <span style={{ color: '#10b981' }}>All Systems Operational</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#00BCD4',
              borderRadius: '50%',
            }}
          ></div>
          <span style={{ color: '#6b7280' }}>Support Team Available</span>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          padding: '32px 24px',
        }}
      >
        <div
          style={{
            marginBottom: '24px',
          }}
        >
          <h2
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#111827',
              margin: '0 0 12px 0',
            }}
          >
            Hello {firstName},
          </h2>

          {messageType === 'welcome' && (
            <p
              style={{
                color: '#6b7280',
                lineHeight: '1.6',
                margin: '0 0 16px 0',
              }}
            >
              Welcome to Moontag! We&apos;re excited to have you join our
              community of innovators building the future of digital solutions
              across Africa.
            </p>
          )}

          <p
            style={{
              color: '#6b7280',
              lineHeight: '1.6',
              margin: '0 0 24px 0',
            }}
          >
            Your account is now active and ready to use. Here&apos;s what you
            can do next:
          </p>
        </div>

        {/* Action Items */}
        <div
          style={{
            backgroundColor: '#f9fafb',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '24px',
          }}
        >
          <h3
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#111827',
              margin: '0 0 16px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: '#00BCD4',
                color: '#ffffff',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
              }}
            >
              ✓
            </span>
            Next Steps
          </h3>

          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#374151' }}>01.</strong>
            <span style={{ marginLeft: '8px', color: '#6b7280' }}>
              Explore our services and find the right solution for your project
            </span>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#374151' }}>02.</strong>
            <span style={{ marginLeft: '8px', color: '#6b7280' }}>
              Join our community and connect with other innovators
            </span>
          </div>

          <div>
            <strong style={{ color: '#374151' }}>03.</strong>
            <span style={{ marginLeft: '8px', color: '#6b7280' }}>
              Schedule a consultation to discuss your specific needs
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          <a
            href='https://moontag.com/services'
            style={{
              display: 'inline-block',
              backgroundColor: '#00BCD4',
              color: '#ffffff',
              padding: '12px 24px',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              fontSize: '14px',
            }}
          >
            Get Started →
          </a>
        </div>

        {/* Support Section */}
        <div
          style={{
            backgroundColor: '#1f2937',
            color: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '24px',
          }}
        >
          <h4
            style={{
              fontSize: '14px',
              fontWeight: '600',
              margin: '0 0 12px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#00BCD4',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
              }}
            >
              ?
            </span>
            Need Help?
          </h4>

          <div
            style={{
              fontSize: '12px',
              fontFamily: 'Monaco, Consolas, "Courier New", monospace',
              color: '#9ca3af',
              lineHeight: '1.4',
            }}
          >
            <div>
              → Documentation:{' '}
              <a href='#' style={{ color: '#00BCD4' }}>
                docs.moontag.com
              </a>
            </div>
            <div>
              → Support Email:{' '}
              <a href='mailto:support@moontag.com' style={{ color: '#00BCD4' }}>
                support@moontag.com
              </a>
            </div>
            <div>→ Response Time: &lt; 24 hours</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: '#f9fafb',
          padding: '24px',
          borderTop: '1px solid #e5e7eb',
        }}
      >
        <div
          style={{
            fontSize: '12px',
            color: '#6b7280',
            textAlign: 'center',
            marginBottom: '12px',
            fontFamily: 'Monaco, Consolas, "Courier New", monospace',
          }}
        >
          Building digital solutions that scale across Africa
        </div>

        <div
          style={{
            fontSize: '12px',
            color: '#9ca3af',
            textAlign: 'center',
            lineHeight: '1.4',
          }}
        >
          <div>© 2024 Moontag. All rights reserved.</div>
          <div style={{ marginTop: '4px' }}>
            Cocody, Riviera • Abidjan, Côte d&apos;Ivoire
          </div>
          <div style={{ marginTop: '8px' }}>
            <a
              href='#'
              style={{
                color: '#6b7280',
                textDecoration: 'none',
                marginRight: '12px',
              }}
            >
              Unsubscribe
            </a>
            <a href='#' style={{ color: '#6b7280', textDecoration: 'none' }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
