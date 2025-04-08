// System Performance and Logs component
// system-performance-logs.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface LogEntry {
  id: number;
  timestamp: Date;
  level: 'info' | 'warning' | 'error';
  source: string;
  message: string;
  details?: string;
}

interface PerformanceMetric {
  name: string;
  current: number;
  average: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
}

@Component({
  selector: 'app-system-performance-logs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>System Performance & Logs</h2>
        <div class="header-actions">
          <button class="refresh-btn" (click)="refreshData()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
            </svg>
            Refresh
          </button>
        </div>
      </div>
      
      <div class="tabs">
        <button 
          class="tab-btn" 
          [ngClass]="{'active': activeTab === 'performance'}" 
          (click)="activeTab = 'performance'">
          Performance
        </button>
        <button 
          class="tab-btn" 
          [ngClass]="{'active': activeTab === 'logs'}" 
          (click)="activeTab = 'logs'">
          System Logs
        </button>
      </div>
      
      <!-- Performance Tab -->
      <div class="tab-content" *ngIf="activeTab === 'performance'">
        <div class="metrics-header">
          <h3>System Metrics</h3>
          <div class="toggle-switch">
            <label>Auto-refresh</label>
            <input type="checkbox" [(ngModel)]="autoRefresh" (change)="toggleAutoRefresh()">
          </div>
        </div>
        
        <div class="metrics-grid">
          <div class="metric-card" *ngFor="let metric of performanceMetrics" [ngClass]="metric.status">
            <div class="metric-header">
              <h4>{{ metric.name }}</h4>
              <span class="status-indicator" [ngClass]="metric.status"></span>
            </div>
            <div class="metric-value">{{ metric.current }}{{ metric.unit }}</div>
            <div class="metric-average">Avg: {{ metric.average }}{{ metric.unit }}</div>
          </div>
        </div>
        
        <div class="chart-container">
          <h3>CPU Usage Over Time</h3>
          <div class="chart">
            <!-- Placeholder for chart -->
            <div class="chart-placeholder">
              <div class="chart-line" [style.height.%]="cpuUsageData[0]"></div>
              <div class="chart-line" [style.height.%]="cpuUsageData[1]"></div>
              <div class="chart-line" [style.height.%]="cpuUsageData[2]"></div>
              <div class="chart-line" [style.height.%]="cpuUsageData[3]"></div>
              <div class="chart-line" [style.height.%]="cpuUsageData[4]"></div>
              <div class="chart-line" [style.height.%]="cpuUsageData[5]"></div>
              <div class="chart-line" [style.height.%]="cpuUsageData[6]"></div>
              <div class="chart-line" [style.height.%]="cpuUsageData[7]"></div>
              <div class="chart-line" [style.height.%]="cpuUsageData[8]"></div>
              <div class="chart-line" [style.height.%]="cpuUsageData[9]"></div>
            </div>
            <div class="chart-labels">
              <span>-9m</span>
              <span>-8m</span>
              <span>-7m</span>
              <span>-6m</span>
              <span>-5m</span>
              <span>-4m</span>
              <span>-3m</span>
              <span>-2m</span>
              <span>-1m</span>
              <span>now</span>
            </div>
          </div>
        </div>
        
        <div class="server-status">
          <h3>Server Status</h3>
          <div class="status-grid">
            <div class="status-item">
              <div class="status-name">API Server</div>
              <div class="status-value online">Online</div>
            </div>
            <div class="status-item">
              <div class="status-name">Database</div>
              <div class="status-value online">Online</div>
            </div>
            <div class="status-item">
              <div class="status-name">Storage</div>
              <div class="status-value warning">Degraded</div>
            </div>
            <div class="status-item">
              <div class="status-name">Cache</div>
              <div class="status-value online">Online</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Logs Tab -->
      <div class="tab-content" *ngIf="activeTab === 'logs'">
        <div class="logs-header">
          <div class="filters">
            <div class="filter-group">
              <label>Log Level:</label>
              <select [(ngModel)]="logLevelFilter" (change)="filterLogs()">
                <option value="all">All Levels</option>
                <option value="info">Info</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>
            <div class="filter-group">
              <label>Source:</label>
              <select [(ngModel)]="logSourceFilter" (change)="filterLogs()">
                <option value="all">All Sources</option>
                <option value="api">API</option>
                <option value="database">Database</option>
                <option value="authentication">Authentication</option>
                <option value="storage">Storage</option>
              </select>
            </div>
            <div class="filter-group">
              <label>Search:</label>
              <input type="text" [(ngModel)]="logSearchQuery" (input)="filterLogs()" placeholder="Search logs...">
            </div>
          </div>
          <div class="log-actions">
            <button class="export-btn" (click)="exportLogs()">Export Logs</button>
            <button class="clear-btn" (click)="clearLogs()">Clear Logs</button>
          </div>
        </div>
        
        <div class="logs-table">
          <div class="log-entry" *ngFor="let log of filteredLogs" [ngClass]="log.level">
            <div class="log-header" (click)="toggleLogDetails(log)">
              <div class="timestamp">{{ log.timestamp | date:'MMM d, y, h:mm:ss a' }}</div>
              <div class="level" [ngClass]="log.level">{{ log.level | uppercase }}</div>
              <div class="source">{{ log.source }}</div>
              <div class="message">{{ log.message }}</div>
              <div class="expand">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" [style.transform]="expandedLogs.includes(log.id) ? 'rotate(180deg)' : 'rotate(0)'">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            <div class="log-details" *ngIf="expandedLogs.includes(log.id)">
              <pre>{{ log.details }}</pre>
            </div>
          </div>
          
          <div class="no-logs" *ngIf="filteredLogs.length === 0">
            No logs found matching your filter criteria.
          </div>
        </div>
        
        <div class="pagination">
          <button class="pagination-btn prev" [disabled]="logCurrentPage === 1" (click)="changeLogPage(logCurrentPage - 1)">
            Previous
          </button>
          <div class="page-numbers">
            <button 
              *ngFor="let page of getLogPageNumbers()" 
              class="page-number" 
              [ngClass]="{'active': page === logCurrentPage}"
              (click)="changeLogPage(page)">
              {{ page }}
            </button>
          </div>
          <button class="pagination-btn next" [disabled]="logCurrentPage === logTotalPages" (click)="changeLogPage(logCurrentPage + 1)">
            Next
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      border-radius: 8px;
      background-color: #fff;
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .header-actions {
      display: flex;
      gap: 15px;
    }
    
    .refresh-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: #f5f5f5;
      border: 1px solid #ddd;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .refresh-btn:hover {
      background-color: #e0e0e0;
    }
    
    .tabs {
      display: flex;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
    }
    
    .tab-btn {
      padding: 10px 20px;
      background: none;
      border: none;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      font-weight: 500;
    }
    
    .tab-btn.active {
      border-bottom: 2px solid #d6a4a4;
      color: #d6a4a4;
    }
    
    .metrics-header, .logs-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .toggle-switch {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .metric-card {
      padding: 15px;
      border-radius: 8px;
      border: 1px solid #eee;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    
    .metric-card.good {
      border-left: 4px solid #4caf50;
    }
    
    .metric-card.warning {
      border-left: 4px solid #ff9800;
    }
    
    .metric-card.critical {
      border-left: 4px solid #f44336;
    }
    
    .metric-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    
    .metric-header h4 {
      margin: 0;
      font-weight: 500;
    }
    
    .status-indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    
    .status-indicator.good {
      background-color: #4caf50;
    }
    
    .status-indicator.warning {
      background-color: #ff9800;
    }
    
    .status-indicator.critical {
      background-color: #f44336;
    }
    
    .metric-value {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    
    .metric-average {
      font-size: 14px;
      color: #666;
    }
    
    .chart-container {
      margin-bottom: 30px;
    }
    
    .chart {
      margin-top: 15px;
      height: 200px;
      position: relative;
    }
    
    .chart-placeholder {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      height: 180px;
      border-bottom: 1px solid #ddd;
      border-left: 1px solid #ddd;
      padding-left: 20px;
    }
    
    .chart-line {
      width: 8%;
      background-color: #d6a4a4;
      border-radius: 4px 4px 0 0;
      transition: height 0.3s ease;
    }
    
    .chart-labels {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      font-size: 12px;
      color: #666;
    }
    
    .server-status {
      margin-bottom: 30px;
    }
    
    .status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }
    
    .status-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-radius: 8px;
      border: 1px solid #eee;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    
    .status-value {
      font-weight: 500;
      padding: 4px 8px;
      border-radius: 4px;
    }
    
    .status-value.online {
      background-color: #e8f5e9;
      color: #2e7d32;
    }
    
    .status-value.warning {
      background-color: #fff3e0;
      color: #e65100;
    }
    
    .status-value.offline {
      background-color: #ffebee;
      color: #c62828;
    }
    
    .filters {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    .filter-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .filter-group select, .filter-group input {
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      min-width: 150px;
    }
    
    .log-actions {
      display: flex;
      gap: 10px;
    }
    
    .export-btn, .clear-btn {
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .export-btn {
      background-color: #d6a4a4;
      color: white;
      border: none;
    }
    
    .clear-btn {
      background-color: white;
      border: 1px solid #ccc;
    }
    
    .logs-table {
      margin-bottom: 20px;
    }
    
    .log-entry {
      margin-bottom: 8px;
      border-radius: 4px;
      overflow: hidden;
      border: 1px solid #eee;
    }
    
    .log-entry.error {
      border-left: 4px solid #f44336;
    }
    
    .log-entry.warning {
      border-left: 4px solid #ff9800;
    }
    
    .log-entry.info {
      border-left: 4px solid #2196f3;
    }
    
    .log-header {
      display: grid;
      grid-template-columns: 1fr 80px 150px 3fr 40px;
      padding: 10px 15px;
      cursor: pointer;
      align-items: center;
      gap: 15px;
    }
    
    .log-header:hover {
      background-color: #f5f5f5;
    }
    
    .level {
      padding: 3px 8px;
      border-radius: 4px;
      text-align: center;
      font-size: 12px;
      font-weight: 500;
    }
    
    .level.error {
      background-color: #ffebee;
      color: #c62828;
    }
    
    .level.warning {
      background-color: #fff3e0;
      color: #e65100;
    }
    
    .level.info {
      background-color: #e3f2fd;
      color: #0d47a1;
    }
    
    .source {
      font-weight: 500;
    }
    
    .log-details {
      padding: 15px;
      background-color: #f9f9f9;
      border-top: 1px solid #eee;
      overflow-x: auto;
    }
    
    .log-details pre {
      margin: 0;
      white-space: pre-wrap;
      font-family: monospace;
    }
    
    .no-logs {
      padding: 30px;
      text-align: center;
      color: #666;
    }
    
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      gap: 15px;
    }
    
    .pagination-btn {
      background-color: #f0f0f0;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .pagination-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .page-numbers {
      display: flex;
      gap: 5px;
    }
    
    .page-number {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: none;
      cursor: pointer;
    }
    
    .page-number.active {
      background-color: #d6a4a4;
      color: white;
      border-color: #d6a4a4;
    }
    
    @media (max-width: 768px) {
      .log-header {
        grid-template-columns: 1fr 60px 100px 1fr 30px;
        font-size: 14px;
        gap: 10px;
      }
      
      .metrics-grid {
        grid-template-columns: 1fr;
      }
      
      .status-grid {
        grid-template-columns: 1fr;
      }
      
      .filters {
        flex-direction: column;
        gap: 10px;
      }
    }
  `]
})
export class SystemPerformanceLogsComponent implements OnInit, OnDestroy {
  // Active tab
  activeTab: 'performance' | 'logs' = 'performance';
  
  // Performance metrics
  performanceMetrics: PerformanceMetric[] = [
    { name: 'CPU Usage', current: 42, average: 38, unit: '%', status: 'good' },
    { name: 'Memory Usage', current: 75, average: 68, unit: '%', status: 'warning' },
    { name: 'Disk Space', current: 62, average: 60, unit: '%', status: 'good' },
    { name: 'Network In', current: 1.5, average: 1.2, unit: ' MB/s', status: 'good' },
    { name: 'Network Out', current: 0.8, average: 0.6, unit: ' MB/s', status: 'good' },
    { name: 'Response Time', current: 230, average: 215, unit: ' ms', status: 'warning' }
  ];
  
  // CPU usage chart data
  cpuUsageData: number[] = [35, 40, 38, 42, 45, 41, 38, 42, 46, 42];
  
  // Auto-refresh control
  autoRefresh = false;
  refreshInterval: any;
  
  // Logs data
  logs: LogEntry[] = [
    {
      id: 1,
      timestamp: new Date(new Date().getTime() - 2 * 60000),
      level: 'error',
      source: 'database',
      message: 'Connection timeout after 30s',
      details: 'Error Code: DB-1001\nStack Trace:\nConnectionTimeout: Failed to establish connection after 30s\nat DbConnector.connect (connector.js:125)\nat DatabaseService.query (database-service.js:47)\nat UserRepository.findByEmail (user-repository.js:28)\n'
    },
    {
      id: 2,
      timestamp: new Date(new Date().getTime() - 5 * 60000),
      level: 'warning',
      source: 'api',
      message: 'Rate limit exceeded for user ID: 12345',
      details: 'User IP: 192.168.1.105\nEndpoint: /api/v1/transactions\nRequest ID: req_8a7dfb23\nRate limit: 100 requests per minute\nCurrent count: 102'
    },
    {
      id: 3,
      timestamp: new Date(new Date().getTime() - 10 * 60000),
      level: 'info',
      source: 'authentication',
      message: 'User login successful',
      details: 'User ID: 5678\nUsername: sarah.johnson\nLogin method: password\nDevice: Chrome/Windows'
    },
    {
      id: 4,
      timestamp: new Date(new Date().getTime() - 15 * 60000),
      level: 'info',
      source: 'api',
      message: 'API request completed',
      details: 'Endpoint: /api/v2/users\nMethod: GET\nResponse time: 128ms\nStatus: 200 OK'
    },
    {
      id: 5,
      timestamp: new Date(new Date().getTime() - 20 * 60000),
      level: 'warning',
      source: 'storage',
      message: 'Storage space nearing capacity',
      details: 'Current usage: 85% of allocated capacity\nTotal space: 500GB\nUsed space: 425GB\nFree space: 75GB\nAction recommended: Clear temporary files or increase storage allocation'
    },
    {
      id: 6,
      timestamp: new Date(new Date().getTime() - 25 * 60000),
      level: 'error',
      source: 'api',
      message: 'Internal server error in payment processing',
      details: 'Error Code: API-5002\nPayment provider: Stripe\nTransaction ID: tx_937dfg28\nResponse: 500 Internal Server Error\nPayload: {"amount": 199.99, "currency": "USD", "customer_id": "cus_8937Df"}\nStack trace:\nError: Failed to process payment\nat PaymentService.processPayment (payment-service.js:87)\nat PaymentController.submitPayment (payment-controller.js:42)'
    },
    {
      id: 7,
      timestamp: new Date(new Date().getTime() - 30 * 60000),
      level: 'info',
      source: 'authentication',
      message: 'Password reset requested',
      details: 'User email: j.smith@example.com\nRequest IP: 45.67.89.123\nReset token generated: tok_rst_8375df\nExpires: In 24 hours'
    },
    {
      id: 8,
      timestamp: new Date(new Date().getTime() - 35 * 60000),
      level: 'warning',
      source: 'database',
      message: 'Slow query detected',
      details: 'Query time: 3.5s\nQuery: SELECT u.*, p.* FROM users u JOIN profiles p ON u.id = p.user_id WHERE u.last_login > "2023-01-01" ORDER BY u.created_at\nRows returned: 5428\nRecommendation: Add index on last_login column'
    },
    {
      id: 9,
      timestamp: new Date(new Date().getTime() - 40 * 60000),
      level: 'info',
      source: 'api',
      message: 'New user registered',
      details: 'User ID: 9876\nEmail: new.user@example.com\nRegistration source: Web application\nIP address: 123.45.67.89'
    },
    {
      id: 10,
      timestamp: new Date(new Date().getTime() - 45 * 60000),
      level: 'error',
      source: 'storage',
      message: 'File upload failed',
      details: 'User ID: 4532\nFilename: annual-report-2023.pdf\nFile size: 25MB\nError: Storage quota exceeded\nAction taken: User notified'
    }
  ];
  
  // Logs filtering
  filteredLogs: LogEntry[] = [];
  logLevelFilter: string = 'all';
  logSourceFilter: string = 'all';
  logSearchQuery: string = '';
  expandedLogs: number[] = [];
  
  // Logs pagination
  logsPerPage = 5;
  logCurrentPage = 1;
  logTotalPages = 1;
  
  ngOnInit() {
    this.filterLogs();
    // Initialize with one random metric update
    this.updateRandomMetric();
  }
  
  ngOnDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }
  
  toggleAutoRefresh() {
    if (this.autoRefresh) {
      this.refreshInterval = setInterval(() => {
        this.updateRandomMetric();
        this.updateCpuChart();
      }, 3000);
    } else {
      clearInterval(this.refreshInterval);
    }
  }
  
  refreshData() {
    this.updateRandomMetric();
    this.updateCpuChart();
    
    // Add a new random log entry
    this.addRandomLog();
    this.filterLogs();
  }
  
  updateRandomMetric() {
    // Update a random metric
    const randomIndex = Math.floor(Math.random() * this.performanceMetrics.length);
    const metric = this.performanceMetrics[randomIndex];
    
    // Generate a new current value with some variation
    let newValue = metric.average + (Math.random() * 20 - 10);
    
    // Keep within reasonable bounds
    newValue = Math.max(0, newValue);
    
    // For CPU and Memory, stay under 100%
    if (metric.name === 'CPU Usage' || metric.name === 'Memory Usage' || metric.name === 'Disk Space') {
      newValue = Math.min(99, newValue);
    }
    
    // Round appropriately
    if (metric.unit === ' MB/s') {
      newValue = Math.round(newValue * 10) / 10;
    } else {
      newValue = Math.round(newValue);
    }
    
    // Update the metric
    this.performanceMetrics[randomIndex].current = newValue;
    
    // Update status based on thresholds
    if (metric.name === 'CPU Usage') {
      if (newValue > 80) this.performanceMetrics[randomIndex].status = 'critical';
      else if (newValue > 60) this.performanceMetrics[randomIndex].status = 'warning';
      else this.performanceMetrics[randomIndex].status = 'good';
    } else if (metric.name === 'Memory Usage') {
      if (newValue > 90) this.performanceMetrics[randomIndex].status = 'critical';
      else if (newValue > 70) this.performanceMetrics[randomIndex].status = 'warning';
      else this.performanceMetrics[randomIndex].status = 'good';
    } else if (metric.name === 'Response Time') {
      if (newValue > 500) this.performanceMetrics[randomIndex].status = 'critical';
      else if (newValue > 200) this.performanceMetrics[randomIndex].status = 'warning';
      else this.performanceMetrics[randomIndex].status = 'good';
    }
  }
  
  updateCpuChart() {
    // Shift the chart data and add a new value
    this.cpuUsageData.shift();
    
    // Generate a random value that's not too far from the last one
    const lastValue = this.cpuUsageData[this.cpuUsageData.length - 1];
    let newValue = lastValue + (Math.random() * 10 - 5);
    
    // Keep within reasonable bounds
    newValue = Math.max(10, Math.min(90, newValue));
    newValue = Math.round(newValue);
    
    this.cpuUsageData.push(newValue);
  }
  
  addRandomLog() {
    const levels: ('info' | 'warning' | 'error')[] = ['info', 'warning', 'error'];
    const sources = ['api', 'database', 'authentication', 'storage'];
    const messages = [
      'User login successful',
      'Database query completed',
      'File upload failed',
      'API request processed',
      'Connection timeout',
      'Cache miss detected',
      'Background job completed',
      'Authentication attempt failed',
      'System backup started',
      'Configuration updated'
    ];
    
    const level = levels[Math.floor(Math.random() * levels.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    const newLog: LogEntry = {
      id: this.logs.length + 1,
      timestamp: new Date(),
      level,
      source,
      message,
      details: `Random log entry details for ${message}\nGenerated at: ${new Date().toISOString()}\nLog ID: log_${Math.random().toString(36).substring(2, 10)}`
    };
    
    this.logs.unshift(newLog);
  }
  
  filterLogs() {
    let filtered = [...this.logs];
    
    // Apply level filter
    if (this.logLevelFilter !== 'all') {
      filtered = filtered.filter(log => log.level === this.logLevelFilter);
    }
    
    // Apply source filter
    if (this.logSourceFilter !== 'all') {
      filtered = filtered.filter(log => log.source === this.logSourceFilter);
    }
    
    // Apply search query
    if (this.logSearchQuery.trim()) {
      const query = this.logSearchQuery.toLowerCase().trim();
      filtered = filtered.filter(log => 
        log.message.toLowerCase().includes(query) || 
        (log.details && log.details.toLowerCase().includes(query))
      );
    }
    
    // Update total pages
    this.logTotalPages = Math.ceil(filtered.length / this.logsPerPage);
    
    // Reset to first page when filters change
    this.logCurrentPage = 1;
    
    // Get current page items
    const startIndex = (this.logCurrentPage - 1) * this.logsPerPage;
    this.filteredLogs = filtered.slice(startIndex, startIndex + this.logsPerPage);
  }
  
  getLogPageNumbers(): number[] {
    return Array.from({ length: this.logTotalPages }, (_, i) => i + 1);
  }
  
  changeLogPage(page: number) {
    if (page < 1 || page > this.logTotalPages) return;
    this.logCurrentPage = page;
    
    // Get current page items
    const filtered = this.applyLogFilters();
    const startIndex = (this.logCurrentPage - 1) * this.logsPerPage;
    this.filteredLogs = filtered.slice(startIndex, startIndex + this.logsPerPage);
  }
  
  applyLogFilters(): LogEntry[] {
    let filtered = [...this.logs];
    
    // Apply level filter
    if (this.logLevelFilter !== 'all') {
      filtered = filtered.filter(log => log.level === this.logLevelFilter);
    }
    
    // Apply source filter
    if (this.logSourceFilter !== 'all') {
      filtered = filtered.filter(log => log.source === this.logSourceFilter);
    }
    
    // Apply search query
    if (this.logSearchQuery.trim()) {
      const query = this.logSearchQuery.toLowerCase().trim();
      filtered = filtered.filter(log => 
        log.message.toLowerCase().includes(query) || 
        (log.details && log.details.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }
  
  toggleLogDetails(log: LogEntry) {
    const index = this.expandedLogs.indexOf(log.id);
    if (index === -1) {
      this.expandedLogs.push(log.id);
    } else {
      this.expandedLogs.splice(index, 1);
    }
  }
  
  exportLogs() {
    // In a real application, this would generate a CSV or JSON file
    alert('Logs exported successfully!');
  }
  
  clearLogs() {
    if (confirm('Are you sure you want to clear all logs? This action cannot be undone.')) {
      this.logs = [];
      this.filterLogs();
    }
  }
}